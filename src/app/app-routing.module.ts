import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { CategoriesPageComponent } from './pages/admin/categories-page/categories-page.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductsPageComponent } from './pages/admin/products-page/products-page.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { BicyclesComponent } from './pages/bicycles/bicycles.component';
import { Bicyclesfake1Component } from './pages/bicyclesfake1/bicyclesfake1.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { Accessoriesfake2Component } from './pages/accessoriesfake2/accessoriesfake2.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './pages/account/account.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
      { path: 'account', component: AccountComponent },
      { path: 'account/:id', component: UpdateprofileComponent },

      { path: 'bicycles', component: BicyclesComponent },
      { path: 'bicyclesfake1/:id', component: Bicyclesfake1Component },
      { path: 'contact', component: ContactComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'accessoriesfake2', component: Accessoriesfake2Component },
      { path: 'about', component: AboutComponent },

      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'categories', component: CategoriesPageComponent },
      { path: 'categories/add', component: CategoryAddComponent },
      { path: 'categories/:id/update', component: CategoryUpdateComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id/update', component: ProductUpdateComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
