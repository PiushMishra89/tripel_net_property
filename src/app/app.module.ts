import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUplodComponent } from './admin-uplod/admin-uplod.component';
import { HomeComponent } from './home/home.component';
//we fast import http to get API url
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { UplodComponent } from './uplod/uplod.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUplodComponent,
    HomeComponent,
    UplodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
