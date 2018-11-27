import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { User} from '../Model/user'
  import { from } from 'rxjs';
import { userInfo } from 'os';

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
  //  { id: "1", nacionalidad: 'argentino'},
  //  { id: "2", nacionalidad: 'brasilero'},
  //  { id: "3", nacionalidad: 'uruguayo'}
  ];

  constructor(private _data:DataService) { 

  }

  ngOnInit() {
    this._data.getNacionalidades().subscribe(
      (res:any ) => {
        console.log(res);
        this.nacionalidades = res;
    });
  }

  public enviar() :void {

    var user = {
      nombre : "juan",
      apellido : "lopez",
      nacionalidad : 3
    };

    //let usuario : User = new User();
    //usuario.nombre = this.nombre;
    //usuario.apellido = this.apellido; 
    //usuario.nacionalidad = this.idNacionalidad;
    

    this._data.login(user);
    console.log(user.nombre);
    console.log("Se recibio nombre: " + this.nombre + " apellido: " + this.apellido + " nacionalidad: " + this.idNacionalidad);
  }
}
