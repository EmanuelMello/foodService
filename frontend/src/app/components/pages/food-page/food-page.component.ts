import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  tag: any;
  constructor( foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverFood => {
        this.food = serverFood;
      });
    })
  }

  ngOnInit(): void {
  }

}
