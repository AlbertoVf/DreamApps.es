import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { HeaderComponent } from './components/static/header/header.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DataSectionComponent } from './components/shared/data-section/data-section.component';
import { ItemDataComponent } from './components/shared/item-data/item-data.component';
import { ServiciosInformaticosComponent } from './components/pages/servicios-informaticos/servicios-informaticos.component';
import { SoftwareGestionComponent } from './components/pages/software-gestion/software-gestion.component';
import { CashGuardComponent } from './components/pages/cash-guard/cash-guard.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { SectoresComponent } from './components/pages/sectores/sectores.component';
import { DesarrolloMedidaComponent } from './components/pages/desarrollo-medida/desarrollo-medida.component';
import { MarketingOnlineComponent } from './components/pages/marketing-online/marketing-online.component';
import { ServicioTecnicoComponent } from './components/pages/servicio-tecnico/servicio-tecnico.component';
import { MantenimientoComponent } from './components/pages/mantenimiento/mantenimiento.component';
import { SeguridadInformaticaComponent } from './components/pages/seguridad-informatica/seguridad-informatica.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent,
        HomeComponent,
        DataSectionComponent,
        ItemDataComponent,
        ServiciosInformaticosComponent,
        SoftwareGestionComponent,
        CashGuardComponent,
        SoporteComponent,
        SectoresComponent,
        DesarrolloMedidaComponent,
        MarketingOnlineComponent,
        ServicioTecnicoComponent,
        MantenimientoComponent,
        SeguridadInformaticaComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
