import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
