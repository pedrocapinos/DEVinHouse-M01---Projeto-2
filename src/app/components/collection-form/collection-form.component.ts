import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionsService } from 'src/app/services/collections.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {

  formValid = false;
  editar = false;

  public formularioColecao!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private collectionsService: CollectionsService,
    private location: Location
    ) { }

  ngOnInit(): void {

    let registro = null;

    this.formularioColecao = this.fb.group({
      id: null,
      nome: ['', [Validators.required]],
      lancamento: ['', [Validators.required, Validators.minLength(4)]],
      ano: ['', [Validators.required]],
      orcamento: ['', [Validators.required, Validators.min(0)]],
      responsavel: ['', [Validators.required]],
      marca: ['', [Validators.required]]
    });
    
    this.activated.params.subscribe(
      (parametros: any) => {
        const id = parametros['id'];
        if (id !== undefined) {
          this.editar = true;
          const colecao$ = this.collectionsService.lerPorID(id);
          colecao$.subscribe(colecao => {
            registro = colecao;
            this.atualizarFormulario(colecao);
          })
        }
      }
    )

  }

  public salvarColecao() {
    if (this.formularioColecao.valid) {
      // console.log(this.formularioModelo.value)
      if (this.formularioColecao.value.id) {
        //id já existe, estamos editando um elemento
        this.collectionsService.atualizar(this.formularioColecao.value).subscribe();
      }
      else {
        this.collectionsService.criar(this.formularioColecao.value).subscribe();
        //id não existe, estamos criando um elemento
      }
      this.location.back();
    }
    else {
      alert('Formulário Inválido.')
    }
  }

  public atualizarFormulario(colecao: any) {
    this.formularioColecao.patchValue({
      id: colecao.id,
      nome: colecao.nome,
      lancamento: colecao.lancamento,
      ano: colecao.ano,
      orcamento: colecao.orcamento,
      responsavel: colecao.responsavel,
      marca: colecao.marca
    })
  }

  public cancelarColecao() {
    this.formularioColecao.reset();
    this.location.back();
  }

}
