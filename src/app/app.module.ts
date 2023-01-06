import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientComponent } from './modules/list-client/list-client.component';
import { HttpClientModule } from "@angular/common/http";
import { ClientService } from './core/service/client.service';
import { NewClientComponent } from './modules/new-client/new-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/layout/app-header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    NewClientComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
