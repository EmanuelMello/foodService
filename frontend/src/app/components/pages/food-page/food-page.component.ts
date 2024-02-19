import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [
      CommonModule, 
      NgbRatingModule, 
      NotFoundComponent, 
      HttpClientModule, 
      ToastrModule
    ],
    providers: [FoodService]
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
