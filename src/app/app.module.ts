import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchImgComponent } from './components/search-img/search-img.component';
import { ListImgComponent } from './components/list-img/list-img.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchImgComponent,
    ListImgComponent,
    NavbarComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
