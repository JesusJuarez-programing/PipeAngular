import { Component, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Iron Man';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345.66;
  nombre2: string = 'AntoNI0';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 10,
    direccion: {
      calle: 'Primavera',
      casa: 134
    }
  }

  valorPromesa = new Promise<string>( (resolve)=> { 
  setTimeout(() => {
    resolve('Llego la data');
  }, 4500);
});

}
