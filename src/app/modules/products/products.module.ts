import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { Route, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
    children: [{ path: ':id', component: ProductItemComponent }],
  },
];

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
  ],
  exports: [],
})
export class ProductsModule {}
