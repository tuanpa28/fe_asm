import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-bicyclesfake1',
  templateUrl: './bicyclesfake1.component.html',
  styleUrls: ['./bicyclesfake1.component.scss'],
})
export class Bicyclesfake1Component {
  products: IProduct[] = [];
  product: IProduct | undefined;
  productId: string | undefined;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productId = id;
      // console.log(this.productId);

      this.productService.getProductById(id).subscribe(
        ({ product }) => {
          this.product = product;
          // console.log(product);

          this.getRelatedProducts(product.categoryId);
        },
        (error) => console.log(error)
      );
    });
  }

  getRelatedProducts(categoryId: string) {
    this.categoryService.getProductsByCategory(categoryId).subscribe(
      (response) => {
        this.products = response.category.productId;
        console.log(this.products);
      },
      (error) => console.log(error)
    );
  }
}
