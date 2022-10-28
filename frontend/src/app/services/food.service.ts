import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    console.log("getAll");
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{    
    return sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
