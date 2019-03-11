import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },   // cuando la ruta este vacia
    { path: 'about', component: AboutComponent },   // cuando la ruta sea about
    { path: 'item', component: ItemComponent },     // cuando la ruta sea item
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
