import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  {
    path:'service',
    component:ServicePageComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
