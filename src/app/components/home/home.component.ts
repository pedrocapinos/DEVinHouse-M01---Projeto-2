import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/interfaces/collection';
import { Model } from 'src/app/interfaces/model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public colecoes$!: Observable<Collection[]>;
  public modelos$!: Observable<Model[]>;
  public colecoesEmOrdem$!: Observable<Collection[]>;
  public somatorio$!: Observable<Collection[]>;

  public orcamentoMedio!:number;
  //listar > subscribe > dentro do subscribe fazer um foreach com os orçamentos, depois é só dividir o valor pelo total de coleções.

  item: Collection[] = [];

  constructor(
    private dashboardService: DashboardService,
    private collectionsService: CollectionsService,
    private modelsService: ModelsService,
    ) { }

  ngOnInit(): void {
    this.colecoesEmOrdem$ = this.dashboardService.listarEmOrdem();
    this.colecoes$ = this.collectionsService.listar();
    this.modelos$ = this.modelsService.listar();

   this.somatorio$ = this.collectionsService.listar();
   this.somatorio$.subscribe((itens) => {
      let soma = 0;
      let elementos = 0;
      for (let colecao of itens) {
        soma += colecao.orcamento;
        elementos++;
      }
      this.orcamentoMedio = soma/elementos;
    })

    }
  }
