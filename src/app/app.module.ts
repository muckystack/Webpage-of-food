import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/container/body/menu/menu.component';
import { ContainerComponent } from './components/container/container.component';
import { BodyComponent } from './components/container/body/body.component';
import { ProductsComponent } from './components/container/body/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    BodyComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
