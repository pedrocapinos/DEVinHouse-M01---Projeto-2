import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  private readonly API = `${environment.API}models`;

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<Model[]>(this.API);
  }
}
