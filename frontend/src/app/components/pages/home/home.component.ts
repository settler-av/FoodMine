import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = []
  /*
      Note: You will get error in `params.searchTerm` 
      In new versions you have to access it like ['searchTerm']
      --- Property 'searchTerm' comes from an index signature, so it must be accessed with ['searchTerm'].---
      TO disable this warning: go to tsConfig file and make ''
      */
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params) => {
      
      if (params.searchTerm) 
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        
      else
        this.foods = this.foodService.getAll();
      
    })
    // this.foods = foodService.getAll()
  }

  ngOnInit(): void {
  }

}
