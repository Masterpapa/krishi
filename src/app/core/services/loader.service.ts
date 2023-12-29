import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderVisibile:boolean=true;

  constructor() { }

  showLoader(){
    this.loaderVisibile=true;
  }

  hideLoader(){
    setTimeout(() => {
      this.loaderVisibile=false;
    }, 3000);
    return this.loaderVisibile;
  }

}
