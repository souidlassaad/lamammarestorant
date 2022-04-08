import { Component, OnInit } from '@angular/core';
import { Dishes } from '../models/dishes';
import { DishesService } from '../services/dishes.sevice';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
/*
export const DISHES:Dishes[]=[
  {
    id: "1",
    imag:"assets/food/barbecue.jpg",
    nom: "pasta",    
    price: "12.59£",
    description:"italien pasta with cheese",
    rating:"5"
},

{
   id: "2",
    imag:"assets/food/pasta.jpg",
    nom: "spaghetti",
    price:"10.59£",
    description:"spaghetti italien with sauce tomato",
    rating:"2"
},
{
    id: "3",
    imag:"assets/food/salmon.jpg",
    nom: "barbecue",
    price: "20£",
    description:"frech meat cooked on wood fire",
    rating:"5"
},
{
    id: "4",
    imag:"assets/food/spaghetti.jpg",
    nom: "salmon",
    price: "25£",
    description:"frech from meditteranian",
    rating:"3"
},
{
  id: "5",
  imag:"assets/food/barbecue.jpg",
  nom: "pasta",    
  price: "12.59£",
  description:"italien pasta with cheese",
  rating:"5"
},
{
  id: "6",
  imag:"assets/food/barbecue.jpg",
  nom: "pasta",    
  price: "12.59£",
  description:"italien pasta with cheese",
  rating:"5"
}


];
*/
@Component({
  selector: 'app-menu',
  providers:[MessageService,ConfirmationService,DialogService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //dishs = DISHES ;
  selecteddishes : any;
  dishesDialog : boolean;
  updateDishesDialog : boolean;

  // employes: Employe[];
  dishes : any;
 
  dish = new Dishes();

  submitted : boolean;
value:any;
//dish:Dishes;
 // constructor(private dishservice:DishesService) { }

 displayModal : boolean = false;
 constructor( public dialogService:DialogService,private dishservice:DishesService,private route:ActivatedRoute,private confirmationService: ConfirmationService,private messageService: MessageService){}

  ngOnInit(): void {
    
 //this.dishservice.getDishes().then(data => this.dishs = data);
 this.getDishesData();
  }

  getDishesData()
  {
   this.dishservice.getData().subscribe(res=>{
    
     this.dishes=res;
   })
  }


  insertData()

  {
    this.submitted=true;
    this.dishservice.insertData(this.dish).subscribe(res=>{
      this.getDishesData();
      this.dishesDialog = false;
  })
   
  }
  hideDialog() {
    this.dishesDialog = false;
    this.submitted = false;
    }

  showDialog() {
   this.dish = {};
    this.submitted = false;
    this.dishesDialog = true;
   
}




findIndexById(id: any): number {
  let index = -1;
  for (let i = 0; i < this.dishes.length; i++) {
    if (this.dishes[i].id === id) {
        index = i;
        break;
    }
  }
  
  return index;
  }
  
  createId(): any {
  let id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
  }
  
}
