import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from "../tags/tags.component";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foodService = inject(FoodService);
  route = inject(ActivatedRoute);

  foods: Food[] = [];

  constructor() {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    });
  }
}