import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// material
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule // 侧边菜单栏

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
