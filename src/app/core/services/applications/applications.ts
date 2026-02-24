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
  
  userApplications(id:string):Observable<application[]>{
    return this.http.get<application[]>(`${environment.api}application`,{
      params:{
        userId:id
      }
    });
  }
  updateStatus(applicationId: number, newStatus: string): Observable<application> {
    // We target the specific application ID in the URL
    const url = `${environment.api}application/${applicationId}`;
    
    // We send only the field that needs to be updated
    const body = { status: newStatus };

    return this.http.patch<application>(url, body);
  }
}
