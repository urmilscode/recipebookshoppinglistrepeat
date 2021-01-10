import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './Header/header.component';
import {RecipeComponent} from './Header/recipe/recipe.component';
import {ShoppinglistComponent} from './Header/ShoppingList/shoppinglist.component';
import {ShoppingeditComponent} from './Header/ShoppingList/ShoppingListEdit/shoppingedit.component';
import {RecipeListComponent} from './Header/recipe/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './Header/recipe/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './Header/recipe/recipe-list/recipe-item/recipe-item.component';
import {SampleheaderComponent} from './SampleHeader/sampleheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    SampleheaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
