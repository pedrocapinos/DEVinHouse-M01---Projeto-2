import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numeroColecoes:number = 5;
  numeroModelos:number = 10;
  orcamentoMedio:number = 1255.28

  constructor() { }

  ngOnInit(): void {
  }

}
