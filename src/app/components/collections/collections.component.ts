import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/interfaces/collection';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  public colecoes$!: Observable<Collection[]>;

  constructor(
    private collectionsService: CollectionsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.colecoes$ = this.collectionsService.listar();
  }

  public editarColecao(id: number) {
    this.router.navigate(['editcollection', id], { relativeTo: this.route })
  }

}
