import { Component, OnInit } from '@angular/core';
import { Dishes } from '../models/dishes';
import { DishesService } from '../services/dishes.sevice';

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
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishs = DISHES ;
//dish:Dishes;
 // constructor(private dishservice:DishesService) { }

display : boolean = false;

  ngOnInit(): void {
    
 //this.dishservice.getDishes().then(data => this.dishs = data);
  }

  showDialog() {
    this.display = true;
}
}
