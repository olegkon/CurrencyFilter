import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgGridNg2 } from 'ag-grid-angular/main';
import { GridOptions } from 'ag-grid/main';
import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import {DataService} from "./service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
