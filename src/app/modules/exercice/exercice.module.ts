import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceBannerComponent } from './exercice-banner/exercice-banner.component';
import { ReadAllComponent } from './crud/read-all/read-all.component';
import { ReadOneComponent } from './crud/read-one/read-one.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ArticleService } from './crud/services/article/article.service';


@NgModule({
  declarations: [
    ExerciceBannerComponent,
    ReadAllComponent,
    ReadOneComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
