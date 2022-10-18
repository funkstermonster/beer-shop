import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { IconOnlyButtonComponent } from './components/buttons/icon-only-button/icon-only-button.component';
import { TextButtonComponent } from './components/buttons/text-button/text-button.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BestsellersComponent } from './components/menu-items/bestsellers/bestsellers.component';
import { MyAccountComponent } from './components/menu-items/my-account/my-account.component';
import { SpinnerComponent } from './components/menu-items/spinner/spinner.component';
import { PagingComponent } from './components/menu-items/paging/paging.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    IconOnlyButtonComponent,
    TextButtonComponent,
    BestsellersComponent,
    MyAccountComponent,
    SpinnerComponent,
    PagingComponent,
    ProductCardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
