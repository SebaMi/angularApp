import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User} from './Model/user';

@Injectable({
  providedIn: 'root'
}
)

export class DataService {

  //private nacionalidades = new BehaviorSubject<any>([
  //  { id: "1", nacionalidad: 'argentino'},
 //   { id: "2", nacionalidad: 'brasilero'},
 //   { id: "3", nacionalidad: 'uruguayo'}
 // ]);

  private nacionalidades = new BehaviorSubject<any>([]);
  
  goal = this.nacionalidades.asObservable();

  constructor(private http: HttpClient ) { 
    //this.http.get('http://localhost:8080/nacionalidades').subscribe( (informacionServidor: any) => {
    //  console.log(informacionServidor);
   //   this.nacionalidades = informacionServidor;
    //  for (let nac of informacionServidor) {
   //     console.log(nac);
   //     this.agregarNacionalidad(nac);    
   //   }
   // });
  }

  public getNacionalidades():Observable<any>{
    return this.http.get('http://localhost:8080/nacionalidades')
  }

  public createUser(user : User){
    return  this.http.post('http://localhost:8080/usuario',user);
  }

  public login (usuario : User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  
      })
    };

    this.http.post('http://localhost:8080/login',usuario,httpOptions).subscribe((response) => {
      console.log(response)
    });  
  } 

  agregarNacionalidad(nacion) {
    this.nacionalidades.next(nacion)
  }

}
