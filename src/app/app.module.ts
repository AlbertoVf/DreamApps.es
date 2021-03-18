import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { HeaderComponent } from './components/static/header/header.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DataContainerComponent } from './components/static/data-container/data-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    DataContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
