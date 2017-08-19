import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input()
  public ingredientName = '';
  public ingredientAmount = null;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(name, amount) {
    console.log(this.ingredientName, this.ingredientAmount);
    this.ingredientName = '';
    this.ingredientAmount = null;
  }

}
