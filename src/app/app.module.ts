import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SearchComponent } from '../components/search/search.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ProductsService, ProductsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
