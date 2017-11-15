import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox"> Working out
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
