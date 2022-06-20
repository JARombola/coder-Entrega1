import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personajes';
  champList: string[] = ['sett', 'yasuo', 'viego', 'katarina', 'Evelynn', 'irelia', 'morgana', 'shaco', 'vayne', 'yuumi'];
}



