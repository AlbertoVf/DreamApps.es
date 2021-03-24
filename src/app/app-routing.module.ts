import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { CashGuardComponent } from './components/pages/cash-guard/cash-guard.component';
import { DesarrolloMedidaComponent } from './components/pages/desarrollo-medida/desarrollo-medida.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MantenimientoComponent } from './components/pages/mantenimiento/mantenimiento.component';
import { MarketingOnlineComponent } from './components/pages/marketing-online/marketing-online.component';
import { SectoresComponent } from './components/pages/sectores/sectores.component';
import { SeguridadInformaticaComponent } from './components/pages/seguridad-informatica/seguridad-informatica.component';
import { ServicioTecnicoComponent } from './components/pages/servicio-tecnico/servicio-tecnico.component';
import { ServiciosInformaticosComponent } from './components/pages/servicios-informaticos/servicios-informaticos.component';
import { SoftwareGestionComponent } from './components/pages/software-gestion/software-gestion.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';

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
    { path: 'cash-guard', pathMatch: 'full', component: CashGuardComponent },
    {
        path: 'cash-guard/premium',
        pathMatch: 'full',
        redirectTo: 'cash-guard#1',
    },
    { path: 'cash-guard/unico', pathMatch: 'full', redirectTo: 'cash-guard#2' },
    {
        path: 'cash-guard/compact',
        pathMatch: 'full',
        redirectTo: 'cash-guard#3',
    },
    {
        path: 'cash-guard/renting',
        pathMatch: 'full',
        redirectTo: 'cash-guard#4',
    },
    {
        path: 'cash-guard/click-collect',
        pathMatch: 'full',
        redirectTo: 'cash-guard#5',
    },
    { path: 'soporte', pathMatch: 'full', component: SoporteComponent },
    { path: 'soporte/basic', pathMatch: 'full', redirectTo: 'soporte#1' },
    { path: 'soporte/advanced', pathMatch: 'full', redirectTo: 'soporte#2' },
    { path: 'soporte/premium', pathMatch: 'full', redirectTo: 'soporte#3' },
    { path: 'sectores', pathMatch: 'full', component: SectoresComponent },
    {
        path: 'sectores/hosteleria',
        pathMatch: 'full',
        redirectTo: 'sectores#1',
    },
    {
        path: 'sectores/estaciones-servicio',
        pathMatch: 'full',
        redirectTo: 'sectores#2',
    },
    { path: 'sectores/farmacias', pathMatch: 'full', redirectTo: 'sectores#3' },
    { path: 'sectores/retails', pathMatch: 'full', redirectTo: 'sectores#4' },
    { path: 'sectores/estancos', pathMatch: 'full', redirectTo: 'sectores#5' },
    {
        path: 'desarrollo-medida',
        pathMatch: 'full',
        component: DesarrolloMedidaComponent,
    },
    {
        path: 'desarrollo-medida/implantacion-software',
        pathMatch: 'full',
        redirectTo: 'desarrollo-medida#1',
    },
    {
        path: 'desarrollo-medida/aplicaciones-web',
        pathMatch: 'full',
        redirectTo: 'desarrollo-medida#2',
    },
    {
        path: 'desarrollo-medida/web-corporativa',
        pathMatch: 'full',
        redirectTo: 'desarrollo-medida#3',
    },
    {
        path: 'desarrollo-medida/diseno-grafico',
        pathMatch: 'full',
        redirectTo: 'desarrollo-medida#4',
    },
    {
        path: 'desarrollo-medida/mantenimiento',
        pathMatch: 'full',
        redirectTo: 'desarrollo-medida#5',
    },
    {
        path: 'marketing-online',
        pathMatch: 'full',
        component: MarketingOnlineComponent,
    },
    {
        path: 'marketing-online/seo-sem',
        pathMatch: 'full',
        redirectTo: 'marketing-online#1',
    },
    {
        path: 'marketing-online/social-media',
        pathMatch: 'full',
        redirectTo: 'marketing-online#2',
    },
    {
        path: 'marketing-online/analitica-web',
        pathMatch: 'full',
        redirectTo: 'marketing-online#3',
    },
    {
        path: 'marketing-online/planes-marketing',
        pathMatch: 'full',
        redirectTo: 'marketing-online#4',
    },
    {
        path: 'servicio-tecnico',
        pathMatch: 'full',
        component: ServicioTecnicoComponent,
    },
    {
        path: 'servicio-tecnico/auditorias',
        pathMatch: 'full',
        redirectTo: 'servicio-tecnico#1',
    },
    {
        path: 'servicio-tecnico/redes',
        pathMatch: 'full',
        redirectTo: 'servicio-tecnico#2',
    },
    {
        path: 'servicio-tecnico/cloud-teletrabajo',
        pathMatch: 'full',
        redirectTo: 'servicio-tecnico#3',
    },
    {
        path: 'servicio-tecnico/recuperacion-datos',
        pathMatch: 'full',
        redirectTo: 'servicio-tecnico#4',
    },
    {
        path: 'mantenimiento',
        pathMatch: 'full',
        component: MantenimientoComponent,
    },
    {
        path: 'mantenimiento/planes-mantenimiento',
        pathMatch: 'full',
        redirectTo: 'mantenimiento#1',
    },
    {
        path: 'mantenimiento/soporte-remoto',
        pathMatch: 'full',
        redirectTo: 'mantenimiento#2',
    },
    {
        path: 'seguridad-informatica',
        pathMatch: 'full',
        component: SeguridadInformaticaComponent,
    },
    {
        path: 'seguridad-informatica/esset',
        pathMatch: 'full',
        redirectTo: 'seguridad-informatica#1',
    },
    {
        path: 'seguridad-informatica/firewall',
        pathMatch: 'full',
        redirectTo: 'seguridad-informatica#2',
    },
    {
        path: 'seguridad-informatica/sistemas',
        pathMatch: 'full',
        redirectTo: 'seguridad-informatica#3',
    },
    {
        path: 'seguridad-informatica/backups',
        pathMatch: 'full',
        redirectTo: 'seguridad-informatica#4',
    },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
