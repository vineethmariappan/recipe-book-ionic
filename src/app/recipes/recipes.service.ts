import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes : Recipe[] = [
    {
      id : 'r1',
      title : 'parotta',
      imageUrl : 'https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Parotta-3.jpg',
      ingredients : ['maida','oil']
    },
    {
      id : 'r2',
      title : 'dosa',
      imageUrl : 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg',
      ingredients : ['rice']
    }
  ]
  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId : string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId : string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
    
  }
  constructor() { }
}
