import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarFixed: boolean = false;
  sidebarOpened:boolean=false;
  logoPath="../../../assets/images/logo_tree.png";
  serviceSubmenu:boolean=false;
  galleySubmenu:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 180) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

  toggleSidebar(){
    this.sidebarOpened=!this.sidebarOpened;
  }

  toggleSubmenu(event:any){
    let submenu=event.target.innerText;
    if(submenu==='Services'){
      this.serviceSubmenu=!this.serviceSubmenu;
    }
    if(submenu==='Gallary'){
      this.galleySubmenu=!this.galleySubmenu;
    }
  }

}
