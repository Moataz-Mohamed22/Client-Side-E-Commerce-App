import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../shared/models/Product';
import { Observable } from 'rxjs';
import { ICategory } from '../shared/models/Category';
import { ProductParam } from '../shared/models/productParam';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {}

  baseURL = 'https://localhost:44367/api/';

  product: IProduct[] = [];

  getProduct( ProductParam: ProductParam): Observable<IPagination<IProduct>> {
    let param =new HttpParams() ;

    if(ProductParam.CategoryId){
      param = param.append("CategoryId",ProductParam.CategoryId)
    }
    if(ProductParam.SortSelected){
            param = param.append("Sort",ProductParam.SortSelected)

    }
    if(ProductParam.search){
      param = param.append("Search",ProductParam.search)

    }
    
       param = param.append("PageNumber",ProductParam.PageNumber)
            param = param.append("PageSize",ProductParam.PageSize)

    return this.http.get<IPagination<IProduct>>(
      this.baseURL + 'Product/get-all',{params:param}
    );
  }
  getCategory(){
    return this.http.get<ICategory[]> (this.baseURL + 'Categories/get-all');
  }
}
