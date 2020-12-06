import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes : Recipe[];
  constructor(private recipeService : RecipesService, route:ActivatedRoute) { 
    route.params.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.recipes=this.recipeService.getAllRecipes();
    
  }


}
