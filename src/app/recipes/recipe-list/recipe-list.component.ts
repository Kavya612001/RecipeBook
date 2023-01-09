import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSeleted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_2240,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_2240,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSeleted(recipe: Recipe) {
    this.recipeWasSeleted.emit(recipe);
  }

}
