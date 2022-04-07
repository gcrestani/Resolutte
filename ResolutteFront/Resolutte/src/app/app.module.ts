import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AudioComponent } from './audio/audio.component';
import { AudioAddComponent } from './audio-add/audio-add.component';
import { AudioDetailComponent } from './audio-detail/audio-detail.component';
import { AudioEditComponent } from './audio-edit/audio-edit.component'
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    AudioAddComponent,
    AudioDetailComponent,
    AudioEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
