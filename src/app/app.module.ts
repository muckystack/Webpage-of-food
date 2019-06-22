import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContainerComponent } from './components/container/container.component';
import { DessertComponent } from './components/dessert/dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
