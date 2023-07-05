import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingListReducer } from './store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      ShoppingList: ShoppingListReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
