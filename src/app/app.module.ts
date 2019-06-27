import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SearchComponent } from '../components/search/search.component';
import { AnalysisComponent } from '../components/analysis/analysis.component';
import { ProductsService } from '../services/products.service';
import { DatabaseService } from 'src/services/database.service';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    AnalysisComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ProductsService, DatabaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
