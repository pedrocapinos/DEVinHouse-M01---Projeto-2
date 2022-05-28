import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../interfaces/collection';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = `${environment.API}collections`;

  constructor(private http: HttpClient) { }

  public listarEmOrdem() {
    return this.http.get<Collection[]>(`${this.API}?_sort=orcamento&_order=desc&_limit=5`);
  }

  // public contarColecoes() {
  //   let itens:number = 0;
  //   this.http.get<Collection[]>(this.API).subscribe( (elem) => {
  //     itens = elem.length;
  //     console.log(`Total de ${itens} colecoes`);
  //   });
  // }


}