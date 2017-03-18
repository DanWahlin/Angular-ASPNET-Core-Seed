import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const app_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' } //catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
    static components = [ HomeComponent ];
}