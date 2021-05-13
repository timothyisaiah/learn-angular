import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'My First Recipe',
      'Its Awesome to learn Angular with recipes',
      'C:/Users/HP/Pictures/Screenshots/Screens.png',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Bread', 3)
      ]),
    new Recipe(
      'My Second Recipe',
      'Its Awesome to learn Angular with recipes',
      'D:/Isaiah/Isaiah/Gigs/constructed/preview_img/preview.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Fries', 32)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
