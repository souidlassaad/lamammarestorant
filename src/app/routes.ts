import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from "./menu/menu.component";
import { DetailComponent } from "./detail/detail.component";
import { BlogComponent } from "./blog/blog.component";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";


export const routes: Routes = [
 
  
 
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"menu",component:MenuComponent},
    {path:"detail",component:DetailComponent},
    {path:"blog",component:BlogComponent},
    {path:"register",component:RegisterComponent},
    {path:"",redirectTo:"/home",pathMatch:"full"}
   


    
  ];
 
  