import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { application } from './../../../shared/models/application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Applications {
  private http = inject(HttpClient);
  apply(application:Omit<application,"dateAdded"|"id">):Observable<application> {
    const candidate  = { 
      ...application,
      dateAdded : Date.now()
    }
    return this.http.post<application>(`${environment.api}application`,candidate);
  }
}
