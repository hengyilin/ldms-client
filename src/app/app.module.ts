import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// material
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";


// Routing
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, // 侧边菜单栏
    MatToolbarModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
