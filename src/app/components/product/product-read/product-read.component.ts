import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductProps } from '../product.model';

interface atProductsProps {
  products: Array<ProductProps>
}

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["name", "price", "description", "action"];


  constructor(private productService: ProductService){}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products:any) => {
      let atProducts:atProductsProps = products
      this.products = atProducts.products
    })
  }
}
