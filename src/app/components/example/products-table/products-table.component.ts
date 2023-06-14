import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ProductsTableDataSource } from "./products-table-datasource";
import { ProductProps } from "../../product/product.model";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
  styleUrls: ["./products-table.component.css"],
})
export class ProductsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductProps>;
  dataSource: ProductsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  constructor() {
    this.dataSource = new ProductsTableDataSource();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
