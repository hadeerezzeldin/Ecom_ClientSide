import { ProductParams } from './../shared/Models/ProductParams';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/Pagination';
import { IProduct } from '../shared/Models/Product';
import { ICategory } from '../shared/Models/Category';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  constructor(private shopService:ShopService){}


  ngOnInit(): void {
     this.productParam.pageSize = 1;
   this.getAllProducts();
   this.getCategories();
  }


Product:IProduct[]
Category:ICategory[]

productParam = new ProductParams()
TotalCount:number;
  getAllProducts(){
    this.shopService.getProduct(this.productParam).subscribe({
      next:((value:IPagination)=>{
        this.Product = value.data;
        this.TotalCount = value.totalCount;
        this.productParam.pageNumber = value.pageNumber;
        this.productParam.pageSize= value.pageSize;
        
      })
    })
    }


    getCategories(){
      this.shopService.getCategries().subscribe({
        next:((value) =>{
          this.Category = value;
          console.log(this.Category)
        })
      })
    }

    //get all prod with  their categories
  
    SelectedCategoey(catId:number){
      this.productParam.CategoryId = catId;
      this.getAllProducts();
    }

    //sort by price
    SortingOption=[
      {name:'Price', value:'Name'},
      {name:'Price: min-max', value:'asc'},
      {name:'Price: max-min', value:'desc'}

    ]
 

    SortingByPrice(sort:Event){
      this.productParam.sortSelected = (sort.target as HTMLInputElement).value;
      this.getAllProducts()
    }

    //filter by search
  
    OnSearch(search:string){
      this.productParam.Search = search;
      this.getAllProducts();

    }
    @ViewChild('search') searchInput:ElementRef;
    @ViewChild('SortSelected') selected: ElementRef;

    //reset all values
    ResetAllValues(){
          this.productParam.Search='';
          this.productParam.sortSelected =this.SortingOption[0].value;
          this.productParam.CategoryId=0;
           if (this.searchInput) {
                this.searchInput.nativeElement.value = '';
            }

           if (this.selected) {
         this.selected.nativeElement.selectedIndex = 0;
          }
          
          this.getAllProducts();
          
    }

    OnChangePage(event:any){
        this.productParam.pageNumber = event;
        this.getAllProducts();

    }
  }

  

