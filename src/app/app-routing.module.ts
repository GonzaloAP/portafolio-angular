import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },   // cuando la ruta este vacia
    { path: 'about', component: AboutComponent },   // cuando la ruta sea about
    { path: 'item/:id', component: ItemComponent },     // cuando la ruta sea item
    { path: 'search/:termino', component: SearchComponent },     // cuando la ruta sea search
    { path: '**', pathMatch: 'full', redirectTo: 'home' }   // para cualquier otra ruta
];

@NgModule({
    imports: [
        RouterModule.forRoot( ROUTES, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
