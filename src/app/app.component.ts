import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Models/Product';
import { IPagination } from './shared/Models/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 constructor(private httpClient:HttpClient ){}
 


  ngOnInit(): void {
   
    // throw new Error('Method not implemented.');
  }

  title = 'Ecom_ClientSide';
}
