import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { ProductProps } from "../product.model";

interface atProduct {
  product: ProductProps
}

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
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
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe((product: any) => {
      let atProduct: atProduct = product
      this.product = atProduct.product
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMsg('Operação bem sucedida')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
