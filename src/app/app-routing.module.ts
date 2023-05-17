import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component'
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//declaro las rutas de mi app
const routes: Routes = [
  // {
  //   path:"",
  //   component: HomePageComponent
  // },
  {
    path: "about",
    component:AboutPageComponent
  },
  {
    path: "contact",
    component:ContactPageComponent
  },
  {
    path: "countries",
    loadChildren: () => import('./countries/countries.module').then ( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo:"countries"
  }
]
//si la ruta no es ninguna de las declaradas (**) lo redirije a home


//importo modulo de ng routerMosule
@NgModule({
  imports: [
    RouterModule.forRoot( routes ),

  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

