import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  @Input()
  champUrl!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
