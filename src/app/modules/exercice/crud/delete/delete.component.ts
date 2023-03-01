import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  id! : number;

  constructor(private _articleService : ArticleService
    , private _activatedRoute : ActivatedRoute
    , private _router : Router){

    this.id = this._activatedRoute.snapshot.params['id']

  }

  confirm(){

    this._articleService.delete(this.id)

  }

  cancel(){

    this._router.navigate(['/exercice/crud/read', this.id])

  }

}
