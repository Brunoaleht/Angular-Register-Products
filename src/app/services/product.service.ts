import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProductProps } from "../components/product/product.model";
import { EMPTY, Observable, catchError, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl: string = "http://localhost:5000/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMsg(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  createProduct(product: ProductProps): Observable<ProductProps> {
    return this.http.post<ProductProps>(`${this.baseUrl}/create`, product).pipe(
      map((obj) => obj),
      catchError((err) => this.handleError(err))
    );
  }

  handleError(err: any): Observable<any> {
    this.showMsg(`${err.error.message}`, true);
    return EMPTY;
  }

  getAllProducts() {
    return this.http.get(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((err) => this.handleError(err))
    );
  }
  getById(id: string | null): Observable<ProductProps> {
    return this.http.get<ProductProps>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((err) => this.handleError(err))
    );
  }
  updateProduct(product: ProductProps): Observable<ProductProps> {
    return this.http.patch<ProductProps>(
      `${this.baseUrl}/${product._id}`,
      product
    ).pipe(
      map((obj) => obj),
      catchError((err) => this.handleError(err))
    );
  }
  deleteProduct(id: string | null): Observable<ProductProps> {
    return this.http.delete<ProductProps>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((err) => this.handleError(err))
    );
  }
}
