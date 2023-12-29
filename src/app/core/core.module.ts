import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgTickerModule } from 'ng-ticker';
import { RouterModule } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent,
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    NgTickerModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent,
    ComingSoonComponent
  ]
})
export class CoreModule { }
