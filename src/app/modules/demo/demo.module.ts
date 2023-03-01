import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoBannerComponent } from './demo-banner/demo-banner.component';
import { ReadAllComponent } from './demo1/read-all/read-all.component';
import { ReadOneComponent } from './demo1/read-one/read-one.component';
import { AnimalService } from 'src/app/shared/services/animal/animal.service';


@NgModule({
  declarations: [
    DemoBannerComponent,
    ReadAllComponent,
    ReadOneComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  providers : [AnimalService]
})
export class DemoModule { }
