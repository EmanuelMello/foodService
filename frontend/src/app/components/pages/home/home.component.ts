import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../../../services/food.service";
import { Food } from "../../../shared/models/Food";
import { CommonModule } from "@angular/common";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { SearchComponent } from "../../partials/search/search.component";
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NgbRatingModule, SearchComponent]
})

export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods = foodService.getAll();
    })

  }

  ngOnInit(): void {
  }

}
