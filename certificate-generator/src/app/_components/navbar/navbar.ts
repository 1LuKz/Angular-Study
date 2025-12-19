import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  ngOnInit(): void {
    this.message();
  }

  message(){
    console.log("My component is working!");
  }
}
