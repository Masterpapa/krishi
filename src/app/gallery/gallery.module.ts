import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { OfficeComponent } from './office/office.component';
import { SharedModule } from '../shared/shared.module';
import { MulchingComponent } from './mulching/mulching.component';
import { DripIrrigationComponent } from './drip-irrigation/drip-irrigation.component';
import { SprIrrigationnComponent } from './spr-irrigationn/spr-irrigationn.component';
import { LandscapeIrrigationnComponent } from './landscape-irrigationn/landscape-irrigationn.component';


@NgModule({
  declarations: [
    OfficeComponent,
    MulchingComponent,
    DripIrrigationComponent,
    SprIrrigationnComponent,
    LandscapeIrrigationnComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ]
})
export class GalleryModule { }
