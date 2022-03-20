import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from '../models/dishes';


@Injectable()
export class DishesService {

    constructor(private http: HttpClient) { }
    getDishes() {
        return this.http.get<any>('assets/data/dishes.json')
        .toPromise()
        .then(res => res.data as Dishes[])
        .then(data => data);

    }}