import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarouselDetails } from 'src/app/shared/models/carousel-details';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})



export class CarouselComponent implements OnInit {

  @Input() carouselData?:CarouselDetails[];

  constructor() { }

  ngOnInit(): void {
  }


}
