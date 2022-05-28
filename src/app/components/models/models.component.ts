import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Model } from 'src/app/interfaces/model';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  public modelos$!: Observable<Model[]>;

  constructor(
    private modelsService: ModelsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.modelos$ = this.modelsService.listar();
  }

  public editarModelo(id: number) {
    this.router.navigate(['editmodel', id], { relativeTo: this.route })
  }

}
