import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /** Method that modifies the value of show to perform the toggle function of the navbar. */
  toggleCollapse() {
    this.show = !this.show;
  }

}
