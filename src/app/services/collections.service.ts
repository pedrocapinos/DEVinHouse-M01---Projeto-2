import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../interfaces/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private readonly API = `${environment.API}collections`;

  constructor(private http: HttpClient) { }

  public listarEmOrdem() {
    return this.http.get<Collection[]>(`${this.API}?_sort=orcamento&_order=desc&_limit=5`);
  }

  public listar() {
    return this.http.get<Collection[]>(`${this.API}`);//?_sort=orcamento&_order=desc`);
  }

  public criar(collection: Collection) {
    return this.http.post(this.API, collection).pipe(take(1));
  }

  public lerPorID(id: number) {
    return this.http.get<Collection>(`${this.API}/${id}`).pipe(take(1));
  }

  public atualizar(collection: Collection) {
    return this.http.put(`${this.API}/${collection.id}`, collection).pipe(take(1));
  }

}



