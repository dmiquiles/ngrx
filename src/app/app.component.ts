import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  itens?: any[] = [
    { name: 'Banana', amount: 10},
    { name: 'Grape', amount: 2},
  ]
}
