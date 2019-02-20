import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Dummy', 'Dummy', 'https://www.colourbox.de/vektor/cartoon-blume-vektor-3441120');
  constructor() { }

  ngOnInit() {
  }

}
