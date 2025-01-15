import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _HttpClient: HttpClient) { }

  getProductsSmall(){
    // return this._HttpClient.get<any>('assets/data/products-small.json');
  }




  
}
