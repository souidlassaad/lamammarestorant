import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';


import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {GMapModule} from 'primeng/gmap';
import {CheckboxModule} from 'primeng/checkbox';
import { PasswordModule} from 'primeng/password';
import {StyleClassModule} from 'primeng/styleclass';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { DishesService } from './services/dishes.sevice';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    MenuComponent,
    DetailComponent,
    BlogComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,AccordionModule,BrowserAnimationsModule,ToolbarModule,MenubarModule,ButtonModule,InputTextModule,
    CardModule,ImageModule,DividerModule,CarouselModule,DialogModule,GMapModule,ToastModule,CheckboxModule,
    FormsModule,StyleClassModule,PasswordModule

   
   
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }