import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typedStrings: String[];

  constructor() { }

  ngOnInit(): void {

    this.typedStrings = [
        '&#10140; Click me to enter'
    ];

  }

}
