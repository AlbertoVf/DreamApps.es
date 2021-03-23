import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServiciosInformaticosComponent } from './components/pages/servicios-informaticos/servicios-informaticos.component';
import { SoftwareGestionComponent } from './components/pages/software-gestion/software-gestion.component';

export const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    {
        path: 'servicios-informaticos',
        pathMatch: 'full',
        component: ServiciosInformaticosComponent,
    },
    {
        path: 'servicios-informaticos/redes-sistemas',
        pathMatch: 'full',
        redirectTo: 'servicios-informaticos#1',
    },
    {
        path: 'servicios-informaticos/dominios',
        pathMatch: 'full',
        redirectTo: 'servicios-informaticos#2',
    },
    {
        path: 'servicios-informaticos/housing',
        pathMatch: 'full',
        redirectTo: 'servicios-informaticos#3',
    },
    {
        path: 'servicios-informaticos/ssl',
        pathMatch: 'full',
        redirectTo: 'servicios-informaticos#4',
    },
    {
        path: 'servicios-informaticos/backup-remoto',
        pathMatch: 'full',
        redirectTo: 'servicios-informaticos#5',
    },
    {
        path: 'software-gestion',
        pathMatch: 'full',
        component: SoftwareGestionComponent,
    },
    {
        path: 'software-gestion/erp-business',
        pathMatch: 'full',
        redirectTo: 'software-gestion#1',
    },
    {
        path: 'software-gestion/erp-facturacion',
        pathMatch: 'full',
        redirectTo: 'software-gestion#2',
    },
    {
        path: 'software-gestion/tpv-comercio',
        pathMatch: 'full',
        redirectTo: 'software-gestion#3',
    },
    {
        path: 'software-gestion/tpv-hosteleria',
        pathMatch: 'full',
        redirectTo: 'software-gestion#4',
    },

    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
