import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
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
    private categoryService: CategoryService,
    private userService: UserService,
    private route: Router,


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
  addToCart() {
    const getUser = JSON.parse(localStorage.getItem('user') || '');
    if (!getUser) {
      this.route.navigate(['/signin'])
      return;
    }
    this.userService.updateCart({
      productId: this.productId,
      quantity: 1
    }).subscribe(
      (response) => {
        alert("Thêm sản phẩm thành công")
      },
      (error) => console.log(error)
    );
  }
}
