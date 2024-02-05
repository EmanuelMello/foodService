import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../../../services/food.service";
import { Food } from "../../../shared/models/Food";
import { CommonModule } from "@angular/common";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { SearchComponent } from "../../partials/search/search.component";
import { Component, OnInit } from "@angular/core";
import { TagsComponent } from "../../partials/tags/tags.component";
import { Observable } from "rxjs";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NgbRatingModule, SearchComponent, TagsComponent]
})

export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservalbe = foodService.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
  }

}
