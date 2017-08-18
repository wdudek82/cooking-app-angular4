import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input()
  public ingredientName = '';
  public ingredientAmount = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(name, amount) {
    console.log(name, amount);
  }

}
