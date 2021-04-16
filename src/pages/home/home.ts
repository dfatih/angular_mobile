import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos = [
    "1. Todo",
    "2. Todo",
    "Und noch ein weiteres Todo"
  ];

  currentTodo = "";

  constructor(public navCtrl: NavController) {

  }

  onAddTodo() {
    this.todos.push(this.currentTodo);
    this.currentTodo = "";
  }

}
