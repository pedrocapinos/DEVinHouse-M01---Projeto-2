import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  private readonly API = `${environment.API}models`;

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get<Model[]>(this.API);
  }

  public criar(model: Model) {
    return this.http.post(this.API, model).pipe(take(1));
  }

  public lerPorID(id: number) {
    return this.http.get<Model>(`${this.API}/${id}`).pipe(take(1));
  }

  public atualizar(model: Model) {
    return this.http.put(`${this.API}/${model.id}`, model).pipe(take(1));
  }

  public deletar(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
