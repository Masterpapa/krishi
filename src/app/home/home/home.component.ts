import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselDetailsData:any;

  constructor() {
    this.carouselDetailsData=[
      {
        imageUrl:"../../../assets/images/banner1.jpg",
        title:"Title1",
        desc:"Description1"
      },
      {
        imageUrl:"../../../assets/images/banner2.jpg",
        title:"Title2",
        desc:"Description2"
      },
      {
        imageUrl:"../../../assets/images/banner3.jpg",
        title:"Title3",
        desc:"Description3"
      }
    ]
  }

  ngOnInit(): void {
    AOS.init();
  }



}
