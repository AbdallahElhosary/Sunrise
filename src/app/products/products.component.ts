import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Product } from '../../../models/product';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // httpClient = inject(HttpClient);

  constructor(private httpClient:HttpClient){}

  allProducts: Product[] = [];
  searchText:string='';

  getAllProducts(){
    return this.httpClient.get<Product[]>('http://localhost:3000/products/all');
  }

  ngOnInit(){
    this.getAllProducts().subscribe((data)=>{
      this.allProducts = data
    });
  }
//searchText=Manage
  search(){
    if(this.searchText !== undefined && this.searchText.trim() !== ''){
      this.httpClient.get<Product[]>('http://localhost:3000/products/search?name=' + this.searchText).subscribe((data)=>{this.allProducts = data});
    }else{
      this.getAllProducts().subscribe((data)=>{this.allProducts = data});
    }
  }
}
