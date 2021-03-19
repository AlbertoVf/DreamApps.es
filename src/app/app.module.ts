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
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent,
        HomeComponent,
        DataSectionComponent,
        ItemDataComponent,
        NoImagePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
