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
import { HttpClientModule } from '@angular/common/http';
import { SaleComponent } from './components/badges/sale/sale.component';
import { SoldOutComponent } from './components/badges/sold-out/sold-out.component';
import { NewComponent } from './components/badges/new/new.component';
import { ProductOfTheWeekComponent } from './components/badges/product-of-the-week/product-of-the-week.component';
import { FilterTagComponent } from './components/tag/filter-tag/filter-tag.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './pages/main-page/header/header.component';
import { BeerFilterComponent } from './pages/main-page/beer-filter/beer-filter.component';

import { ProductListComponent } from './pages/main-page/product-list/product-list.component';
import { WishlistComponent } from './components/menu-items/wishlist/wishlist.component';
import { CompareComponent } from './components/menu-items/compare/compare.component';
import { CartComponent } from './components/menu-items/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CustomersAlsoBoughtComponent } from './components/customers-also-bought/customers-also-bought.component';
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
    SaleComponent,
    SoldOutComponent,
    NewComponent,
    ProductOfTheWeekComponent,
    FilterTagComponent,
    SearchBarComponent,
    HeaderComponent,
    BeerFilterComponent,
    ProductListComponent,
    WishlistComponent,
    CompareComponent,
    CartComponent,
    ProductDetailsComponent,
    CustomersAlsoBoughtComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
