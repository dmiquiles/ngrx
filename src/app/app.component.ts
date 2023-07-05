import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getShoppingList } from './store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  // itens?: any[] = [
  //   { name: 'Banana', amount: 10},
  //   { name: 'Grape', amount: 2},
  // ]

  
  constructor(
    private store: Store
  ) {}


  itens$ = this.store.pipe(
    select(getShoppingList)
  )
}
