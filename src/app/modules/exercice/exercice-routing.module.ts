import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';
import { CreateComponent } from './crud/create/create.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ReadAllComponent } from './crud/read-all/read-all.component';
import { ReadOneComponent } from './crud/read-one/read-one.component';
import { UpdateComponent } from './crud/update/update.component';
import { ExerciceBannerComponent } from './exercice-banner/exercice-banner.component';

const routes: Routes = [
  {path : '', component : ExerciceBannerComponent, children : [
    {path : 'crud/all', canActivate : [AuthGuard], component : ReadAllComponent},
    {path : 'crud/read/:id', component : ReadOneComponent},
    {path : 'crud/update/:id', component : UpdateComponent},
    {path : 'crud/create', component : CreateComponent},
    {path : 'crud/delete/:id', component : DeleteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
