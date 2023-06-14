import { Component } from '@angular/core';
import { ProductProps } from '../product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


interface atProduct {
  product: ProductProps
}

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product: ProductProps = {
    name: "",
    description: "",
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe((product: any) => {
      const atProduct: atProduct = product
      this.product = atProduct.product
    })
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product._id).subscribe(() => {
      this.productService.showMsg('Operação bem sucedida')
      this.router.navigate(['/products'])
    })
  }
  cancel() {
    this.router.navigate(["/products"]);
  }
}
