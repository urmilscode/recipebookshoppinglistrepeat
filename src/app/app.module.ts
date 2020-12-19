import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipeComponent} from './header/recipe/recipe.component';
import {RecipedetailComponent} from './header/recipe/recipe-detail/recipedetail.component';
import {RecipelistComponent} from './header/recipe/recipe-list/recipelist.component';
import {RecipeitemComponent} from './header/recipe/recipe-list/recipe-item/recipeitem.component';
import {ShoppinglistComponent} from './header/shopping-list/shoppinglist.component';
import {ShoppinglisteditComponent} from './header/shopping-list/shopping-list-edit/shoppinglistedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipedetailComponent,
    RecipelistComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
