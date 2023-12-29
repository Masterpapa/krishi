import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loaderVisible:boolean=true;

  constructor(loaderService:LoaderService) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderVisible=false;
    }, 5000);
  }

}
