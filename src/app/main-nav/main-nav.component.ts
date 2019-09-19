import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  isHandset: boolean;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 800;
  }

  ngOnInit(): void {
    this.onResize(event);
  }
}
