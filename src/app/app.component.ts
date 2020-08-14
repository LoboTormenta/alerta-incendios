
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alerta de Incendios';

  constructor() { }
  ngOnInit(): void {
    console.log('Webapp cargada correctamente: ');
  }





}
