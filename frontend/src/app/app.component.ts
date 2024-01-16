import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, NgbRatingModule, NgbModule, TagsComponent, FoodPageComponent]
})
export class AppComponent {
  title = 'frontend';
  rating=3;
}
