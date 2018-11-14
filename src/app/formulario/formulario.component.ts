import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: string = '';   // definimos atributos
  public apellido: string = '';
  public idNacionalidad: number = 1 ;

  public nacionalidades = [
    { id: "1", nacionalidad: 'argentino'},
    { id: "2", nacionalidad: 'brasilero'},
    { id: "3", nacionalidad: 'uruguayo'}
  ];

  constructor() { 
    this.nombre = 'Nombre inicial';   
    this.apellido = 'Apellido inicial'; 

  }

  ngOnInit() {
  }

  public enviar() :void {
    console.log("Se recibio nombre: " + this.nombre + " apellido: " +this.apellido + " nacionalidad: " + this.idNacionalidad);
  }
}
