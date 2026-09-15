import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { IProduct } from './shared/models/Product';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(private http: HttpClient) {}

  baseURL = 'https://localhost:44367/api/Product/get-all';

  product: IProduct[] = [];

// getProduct() {
//   this.http.get<IPagination<IProduct>>(this.baseURL).subscribe({
//     next: (value) => {
//       console.log('RESPONSE:', value);
//       console.log('DATA:', value.data);

//       this.product = value.data;

//       console.log('PRODUCT:', this.product);
//     },

//     error: (err) => {
//       console.error('API ERROR:', err);
//     }
//   });
// }
  ngOnInit(): void {
    // this.getProduct();
  }

  protected readonly title = signal('client');
}
