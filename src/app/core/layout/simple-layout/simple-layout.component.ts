import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`,
})
export class SimpleLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
