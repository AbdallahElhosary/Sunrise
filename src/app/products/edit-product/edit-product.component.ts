import { Component, inject } from '@angular/core';
import { Product } from '../../../../models/product';
import { Category } from '../../../../models/category';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  productId: any;
  product: Product = new Product();
  allCategories: Category[] = [];

  // httpClient = inject(HttpClient);
  // activatedRoute = inject(ActivatedRoute);
  // router = inject(Router);
  constructor(private httpClient:HttpClient, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get<Product>('http://localhost:3000/products/one/' + this.productId).subscribe((data)=>{this.product = data});
    this.httpClient.get<Category[]>('http://localhost:3000/categories/all').subscribe((data)=>{this.allCategories = data});
  }

  onSubmit(){
    this.httpClient.put('http://localhost:3000/products/update/' + this.productId, this.product).subscribe(()=>{this.router.navigate(['products'])});
  }
}
