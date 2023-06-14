import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bicyclesfake1',
  templateUrl: './bicyclesfake1.component.html',
  styleUrls: ['./bicyclesfake1.component.scss'],
})
export class Bicyclesfake1Component {
  products: IProduct[] = [];
  product: any | undefined;
  productId: any;
  commentForm = this.fb.group({
    description: ['', Validators.required],
  });
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router,

    private categoryService: CategoryService,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productId = id;

      this.productService.getProductById(id).subscribe(
        ({ product }) => {
          this.product = product;
          console.log(this.product);
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
  insertComment() {

  }
  getComment() {

  }
  onSubmit() {
    const getUser = JSON.parse(localStorage.getItem('user') || '');
    if (!getUser) {
      this.route.navigate(['/signin']);
      return
    }
    this.userService.comment({
      productId: this.productId,
      description: this.commentForm.value.description
    }).subscribe(
      (response) => {
        alert("Bình luận thành công")

        this.productService.getProductById(this.productId).subscribe(
          ({ product }) => {
            this.product = product;
            console.log(this.product);
            this.getRelatedProducts(product.categoryId);
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
    this.commentForm.patchValue(
      { description: "" }
    )
  }
}
