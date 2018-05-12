import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, CoreModule ],
  declarations: [ AppComponent, AppRoutingModule.components ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }