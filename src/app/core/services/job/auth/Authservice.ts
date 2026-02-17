import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private http = inject(HttpClient);
  private url = environment.api+"user";
  login(email:string,password:string):Observable<userType[]>{
    return this.http.get<userType[]>(this.url,{
      params:{
        email,
        password
      },
    })
  }  
}
