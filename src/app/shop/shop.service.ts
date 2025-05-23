import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Category';
import { ProductParams } from '../shared/Models/ProductParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL='https://localhost:44310/api/';

  constructor(private httpClient:HttpClient) { }
 
getProduct(productParam:ProductParams){
  let params = new HttpParams();
  if(productParam.CategoryId){
    params = params.append("CategoryId",productParam.CategoryId.toString());
  }
  if(productParam.sortSelected){
    params = params.append("sort", productParam.sortSelected);
  }
  if(productParam.Search)
  {
    params = params.append("Search",productParam.Search);
  }
    params = params.append("pageNumber",productParam.pageNumber.toString());
    params = params.append("pageSize",productParam.pageSize.toString());

  return this.httpClient.get<IPagination>(this.baseURL+"Product",{params});

 }
 //get prod by category
 getCategries(){
  return this.httpClient.get<ICategory[]>(this.baseURL+"Category")
 }

 //sorting
 
}
