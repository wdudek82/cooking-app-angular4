import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'Sushi',
      'Tasty Japanese Sushi',
      'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg'
    ),
    new Recipe(
      'Hamburger',
      'Delicious Hamburger that\'ll make you fat',
      'http://cep.com.vn/uploads/images/fast-food-1.jpg'
    ),
    new Recipe(
      'Roasted Salmon',
      `This is what we call around here a no-recipe recipe.`,
      'http://bazaarasia.in/upload/image/70056735506811641.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

}
