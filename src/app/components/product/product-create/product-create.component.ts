import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router'
import { ProductProps } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: ProductProps = {
    name: '',
    description: '',
    price: null,
  }
  constructor(private productService: ProductService, private router: Router){}
  
  createProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMsg('Operação bem sucedida')
      this.router.navigate(['/products'])
    })
  }
  cancel() {
    this.router.navigate(['/products'])
  }

}
