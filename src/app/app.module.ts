import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountParentComponentComponent } from './count-parent-component/count-parent-component.component';
import { CountChildComponent } from './count-parent-component/count-child/count-child.component';
import { ParentColourComponentComponent } from './parent-colour-component/parent-colour-component.component';
import { ChildColourComponent } from './parent-colour-component/child-colour/child-colour.component';
import { CoustomColorDirectiveDirective } from './coustom-color-directive.directive';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildInputComponentComponent } from './parent-component/child-input-component/child-input-component.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponentsComponent } from './products-components/products-components.component';
import { SearchProductsComponent } from './products-components/search-products/search-products.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CountChildComponent,
    CountParentComponentComponent,
    ParentColourComponentComponent,
    ChildColourComponent,
    CoustomColorDirectiveDirective,
    ParentComponentComponent,
    ChildInputComponentComponent,
    HeaderComponent,
    ProductsComponentsComponent,
    SearchProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
