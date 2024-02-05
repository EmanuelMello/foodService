import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class NotFoundComponent implements OnInit {

  @Input()
  visible = false;
  @Input()
  notFoundMessage = 'Nothing found!';
  @Input()
  resetLinkText = 'Reset';
  @Input()
  resetLinkRoute = '/';


  ngOnInit(): void {
  }

}