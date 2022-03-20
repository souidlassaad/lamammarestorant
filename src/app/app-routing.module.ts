import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './routes';


@NgModule({
  imports: [
    
    CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations:[]
})
export class AppRoutingModule { }
