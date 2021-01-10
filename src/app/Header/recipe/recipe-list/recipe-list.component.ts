import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('a test Recipe', 'This is test', ' '),
    new Recipe('Spaghetti', 'Italian Cuisine', ' '),
    new Recipe('Khicadi', 'Indian Cuisine', ''),
    new Recipe('Perogi', 'Ukranian', '')
  ];

}
