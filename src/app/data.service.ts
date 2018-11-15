import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {

  private nacionalidades = new BehaviorSubject<any>([
    { id: "1", nacionalidad: 'argentino'},
    { id: "2", nacionalidad: 'brasilero'},
    { id: "3", nacionalidad: 'uruguayo'}
  ]);
  goal = this.nacionalidades.asObservable();

  constructor() { }

  agregarNacionalidad(nacion) {
    this.nacionalidades.next(nacion)
  }

}
