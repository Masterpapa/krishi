import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports:[
    ContactComponent,
    AboutComponent
  ]
})
export class PagesModule { }
