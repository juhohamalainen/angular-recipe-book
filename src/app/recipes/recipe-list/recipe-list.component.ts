import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is how you make ratatouille', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('another test recipe', 'this is how you make maksaloora', 'https://www.minimani.fi/media/catalog/product/cache/9b19c45c70084e218fc0ce0c3e43ed6e/6/4/6412000030026.jpg'),

  ];
  constructor() { }

  ngOnInit() {
    console.log('asd', this.recipes);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
