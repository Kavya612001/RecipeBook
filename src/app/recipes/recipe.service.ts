import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_2240,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Bread', 1)
        ]),

        new Recipe('Another Test Recipe', 
        'This is simply another test', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
        [
            new Ingredient('egg', 3),
            new Ingredient('leaves', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //returns a new array which is an exact copy (not a reference)
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
      
}