import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';

import { IProduct } from '../shared/models/Product';
import { ICategory } from '../shared/models/Category';
import { ProductParam } from '../shared/models/productParam';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  product: IProduct[] = [];


  Category: ICategory[] = [];



  ProductParam = new ProductParam();

  TotalCount: number = 0;

  SortingOptions = [
    { name: 'Default', value: '' },
    { name: 'Price: min-max', value: 'PriceAsc' },
    { name: 'Price: max-min', value: 'PriceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategory();
  }
  getAllProducts(): void {

    this.shopService.getProduct(this.ProductParam).subscribe({

      next: (value) => {

        console.log('RESPONSE:', value);

        this.product = value.data;

        this.TotalCount = value.totalCount;

        this.ProductParam.PageNumber = value.pageNumber;

        this.ProductParam.PageSize = value.pageSize;

        console.log('PRODUCT:', this.product);
        console.log('TOTAL COUNT:', this.TotalCount);
        console.log('PAGE NUMBER:', this.ProductParam.PageNumber);
        console.log('PAGE SIZE:', this.ProductParam.PageSize);
      },

      error: (err) => {
        console.error('API ERROR:', err);
      }

    });
  }

  OnChangePage(event: any): void {

    console.log('PAGE CHANGED:', event);

    this.ProductParam.PageNumber = event.page;

    this.getAllProducts();
  }

  getCategory(): void {

    this.shopService.getCategory().subscribe({

      next: (value) => {

        this.Category = value;

      },

      error: (err) => {

        console.error('CATEGORY API ERROR:', err);

      }

    });
  }

  SelectedId(categoryId: number): void {

    this.ProductParam.CategoryId = categoryId;

    // Go back to first page
    this.ProductParam.PageNumber = 1;

    this.getAllProducts();
  }

  SortingByPrice(event: Event): void {

    const value = (event.target as HTMLSelectElement).value;

    this.ProductParam.SortSelected = value;

    // Go back to first page
    this.ProductParam.PageNumber = 1;

    this.getAllProducts();
  }

  OnSearch(search: string): void {

    this.ProductParam.search = search.trim();

    // Go back to first page
    this.ProductParam.PageNumber = 1;

    this.getAllProducts();
  }

  ResetValue(
    searchInput: HTMLInputElement,
    sortSelect: HTMLSelectElement
  ): void {

    // Reset parameters
    this.ProductParam.search = '';

    this.ProductParam.SortSelected = '';

    this.ProductParam.CategoryId = 0;

    this.ProductParam.PageNumber = 1;

    // Reset UI
    searchInput.value = '';

    sortSelect.selectedIndex = 0;

    // Reload products
    this.getAllProducts();
  }

  getStartItem(): number {

    if (this.TotalCount === 0) {
      return 0;
    }

    return (
      (this.ProductParam.PageNumber - 1) *
      this.ProductParam.PageSize
    ) + 1;
  }

  getEndItem(): number {

    return Math.min(
      this.ProductParam.PageNumber * this.ProductParam.PageSize,
      this.TotalCount
    );
  }
}
