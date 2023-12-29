import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'faq',
    component:FaqComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
