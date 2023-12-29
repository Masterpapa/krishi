import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './office/office.component';
import { MulchingComponent } from './mulching/mulching.component';
import { DripIrrigationComponent } from './drip-irrigation/drip-irrigation.component';
import { SprIrrigationnComponent } from './spr-irrigationn/spr-irrigationn.component';
import { LandscapeIrrigationnComponent } from './landscape-irrigationn/landscape-irrigationn.component';

const routes: Routes = [
  {
    path:'office',
    component:OfficeComponent,
    pathMatch:'full'
  },
  {
    path:'mulching',
    component:MulchingComponent,
    pathMatch:'full'
  },
  {
    path:'drip-irrigation',
    component:DripIrrigationComponent,
    pathMatch:'full'
  },
  {
    path:'sprinkler-irrigation',
    component:SprIrrigationnComponent,
    pathMatch:'full'
  },
  {
    path:'landscape-irrigation',
    component:LandscapeIrrigationnComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
