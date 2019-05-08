import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SimpledialogcomponentComponent } from './simpledialogcomponent/simpledialogcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpledialogcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    SimpledialogcomponentComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
