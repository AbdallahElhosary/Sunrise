import { Component, inject } from '@angular/core';
import { Product } from '../../../../models/product';
import { Category } from '../../../../models/category';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = new Product();
  allCategories: Category[] = [];

  // httpClient = inject(HttpClient);
  // router = inject(Router);
  constructor(private httpClient:HttpClient, private router:Router){}

getAllCategories(){
  return this.httpClient.get<Category[]>('http://localhost:3000/categories/all');
}

  ngOnInit(){
    this.getAllCategories().subscribe((data)=>this.allCategories = data);
  }

  onSubmit(){
    this.httpClient.post<Product>('http://localhost:3000/products/add', this.product).subscribe(()=>{this.router.navigate(['products'])});
  }

}
