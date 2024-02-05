import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../../../services/food.service";
import { Food } from "../../../shared/models/Food";
import { CommonModule } from "@angular/common";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { SearchComponent } from "../../partials/search/search.component";
import { Component, OnInit } from "@angular/core";
import { TagsComponent } from "../../partials/tags/tags.component";
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [FoodService],
  imports: [CommonModule, NgbRatingModule, SearchComponent, TagsComponent, HttpClientModule, NotFoundComponent]
})

export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservable = foodService.getAll();

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
  }

}
