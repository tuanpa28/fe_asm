import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { CategoriesPageComponent } from './pages/admin/categories-page/categories-page.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductsPageComponent } from './pages/admin/products-page/products-page.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BicyclesComponent } from './pages/bicycles/bicycles.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardPageComponent, CategoriesPageComponent, CategoryAddComponent, CategoryUpdateComponent, CategoryListComponent, AdminLayoutComponent, BaseLayoutComponent, SignupComponent, SigninComponent, ProductListComponent, ProductsPageComponent, ProductAddComponent, ProductUpdateComponent,HomepageComponent, BicyclesComponent, AccessoriesComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
