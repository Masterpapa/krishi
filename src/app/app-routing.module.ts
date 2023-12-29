import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ComingSoonComponent } from './core/components/coming-soon/coming-soon.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'coming-soon',
  component:ComingSoonComponent,
  pathMatch:'full'
},
{
  path:'pages',
  loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
},
{
  path:'services',
  loadChildren:()=>import('./services/services.module').then(m=>m.ServicesModule)
},
{
  path:'products',
  loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
},
{
  path:'gallery',
  loadChildren:()=>import('./gallery/gallery.module').then(m=>m.GalleryModule)
},
{
  path:'**',
  component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
