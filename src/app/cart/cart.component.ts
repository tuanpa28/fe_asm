import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }
  user: any;
  cart: any = [];
  ngOnInit() {
    const getUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (!getUser) {
      this.router.navigate(['/detail'])
      return;
    }

    this.userService.getUserProfile().subscribe((res) => {
      this.user = res.user;
      this.cart = res.user.cart;
    })

  }
  deleteProduct(id: string) {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm không");
    if (confirm) {
      this.userService.deleteCart(id).subscribe((res) => {
        this.userService.getUserProfile().subscribe((res) => {
          this.user = res.user;
          this.cart = res.user.cart;
        })
      })
    }

  }
}
