import { Component } from '@angular/core';
import { Product } from '../../../../models/product';
import { Category } from '../../../../models/category';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  productId: any;
  product: Product = new Product();
  category: Category = new Category;
  // httpClient = inject(HttpClient);
  // activatedRoute = inject(ActivatedRoute);
  constructor(private httpClient:HttpClient, private activatedRoute:ActivatedRoute, private router:Router){}

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

  delete(){
    this.httpClient.delete<Product>('http://localhost:3000/products/delete/' + this.productId).subscribe(()=>{this.router.navigate(['products'])});
  }
}
