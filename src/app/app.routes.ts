import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about", component:AboutUsComponent},
    {path:"contact", component:ContactUsComponent},
    {path:"products", component:ProductsComponent},
    {path:"products/details/:id", component:ProductDetailsComponent},
    {path:"products/add", component:AddProductComponent},
    {path:"products/edit/:id", component:EditProductComponent},
    {path:"products/delete/:id", component:DeleteProductComponent},
    {path:"**", component:PageNotFoundComponent}
];
