import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/interfaces/collection';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public colecoes$!: Observable<Collection[]>;

  numeroColecoes!:number;
  numeroModelos:number = 10;
  orcamentoMedio:number = 1255.28

  constructor(private dashboardService: DashboardService,) { }

  ngOnInit(): void {
    this.colecoes$ = this.dashboardService.listarEmOrdem();
    // this.numeroColecoes = this.dashboardService.contarColecoes();
  }

}
