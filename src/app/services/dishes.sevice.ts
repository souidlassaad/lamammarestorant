import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';







@Injectable({providedIn: 'root'})

export class DishesService {

    constructor(private httpclient: HttpClient) { }
   

    getData()
    {
     return this.httpclient.get('http://127.0.0.1:8000/dishes');
    }
  
    insertData(data:any)
    {
      return this.httpclient.post('http://127.0.0.1:8000/adddishes',data);
    }
  
    deleteData(id:any)
    {
      return this.httpclient.delete('http://127.0.0.1:8000/deletedishes/'+id);
    }
    getOneDishes(id:any)
    {
      return this.httpclient.get('http://127.0.0.1:8000/getonedishes/'+id); 
    }
  
    updateData(id:any,data:any)
    {
      return this.httpclient.patch('http://127.0.0.1:8000/updatedishes/'+id,data);
    }
    
      
    
  
}