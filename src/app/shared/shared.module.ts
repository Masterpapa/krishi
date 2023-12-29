import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BreadcumComponent } from './components/breadcum/breadcum.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarouselComponent, BreadcumComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    CarouselComponent,
    BreadcumComponent
  ]
})
export class SharedModule { }
