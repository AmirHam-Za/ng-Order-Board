import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderTypeComponent } from './order-type/order-type.component';
import { OrderComponent } from './order/order.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    OrderTypeComponent,
    OrderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
