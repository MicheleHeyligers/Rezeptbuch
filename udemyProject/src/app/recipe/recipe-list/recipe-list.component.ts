import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  recipe = new Recipe('Dummy', 'Dummy', 'https://www.morphsuitsdeutschland.com/crash-test-dummy-morphsuit');

  constructor() { }

  ngOnInit() {
  }

}
