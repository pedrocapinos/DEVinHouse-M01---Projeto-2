import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.service';
import { Location } from '@angular/common';
import { CollectionsService } from 'src/app/services/collections.service';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/interfaces/collection';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  formValid = false;
  editar = false;

  public colecoes$!: Observable<Collection[]>;

  public tiposModelo = [
    "Bermuda",
    "Biquini",
    "Bolsa",
    "Boné",
    "Calça",
    "Calçados",
    "Camisa",
    "Chapéu",
    "Saia"
  ];

  public colecoesAtivas!:any;

  public formularioModelo!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private modelsService: ModelsService,
    private collectionsService: CollectionsService,
    private location: Location
    ) { }

  ngOnInit(): void {

    this.colecoes$ = this.collectionsService.listar();

    let registro = null;

    this.formularioModelo = this.fb.group({
      id: null,
      nome: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      colecao: ['', [Validators.required]],
      bordado: ['', [Validators.required]],
      estampa: ['', [Validators.required]]
    });

    this.activated.params.subscribe(
      (parametros: any) => {
        const id = parametros['id'];
        if (id !== undefined) {
          this.editar = true;
          const modelo$ = this.modelsService.lerPorID(id);
          modelo$.subscribe(modelo => {
            registro = modelo;
            this.atualizarFormulario(modelo);
          })
        }
      }
    )

  }

  public salvarModelo() {
    if (this.formularioModelo.valid) {
      // console.log(this.formularioModelo.value)
      if (this.formularioModelo.value.id) {
        //id já existe, estamos editando um elemento
        this.modelsService.atualizar(this.formularioModelo.value).subscribe();
      }
      else {
        this.modelsService.criar(this.formularioModelo.value).subscribe();
        //id não existe, estamos criando um elemento
      }
      this.location.back();
    }
    else {
      alert('Formulário Inválido.')
    }
  }

  public atualizarFormulario(modelo: any) {
    this.formularioModelo.patchValue({
      id: modelo.id,
      nome: modelo.nome,
      responsavel: modelo.responsavel,
      tipo: modelo.tipo,
      colecao: modelo.colecao,
      bordado: modelo.bordado,
      estampa: modelo.estampa
    })
  }

  public deletarModelo() {
    this.modelsService.deletar(this.formularioModelo.value.id).subscribe();
    this.location.back();;
  }

  public cancelarModelo() {
    this.formularioModelo.reset();
    this.location.back();
  }

}
