import { Component, inject } from '@angular/core';
import { Product } from '../../../../models/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category } from '../../../../models/category';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId: any;
  product: Product = new Product();
  category: Category = new Category;
  // httpClient = inject(HttpClient);
  // activatedRoute = inject(ActivatedRoute);
  constructor(private httpClient:HttpClient, private activatedRoute:ActivatedRoute){}

  getProduct(){
    this.productId = this.activatedRoute.snapshot.params['id'];
    return this.httpClient.get<Product>("http://localhost:3000/products/one/" + this.productId);
  }

  getCategory(){
    return this.httpClient.get<Category>('http://localhost:3000/categories/one/' + this.product.categoryId);
  }

  ngOnInit(){
    this.getProduct().subscribe((data)=>{
      this.product = data; 
      this.getCategory().subscribe((data)=>{this.category = data});
    });
  }
}
