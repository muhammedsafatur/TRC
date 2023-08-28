import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; 
import { PlatformsComponent } from './platforms/platforms.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '', redirectTo: '/ana-sayfa', pathMatch: 'full' },
  { path: 'ana-sayfa', component: HomepageComponent },
  { path: 'urunlerimiz', component: ProductComponent },
  { path: 'bulundugumuz-platformlar', component: PlatformsComponent },
  { path: 'hakkimizda', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
