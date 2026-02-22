import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Observable, retry } from 'rxjs';
import { savedJobs } from '../../../shared/models/savedJobOffers';

@Injectable({
  providedIn: 'root',
})
export class SavedJobs {
  private http = inject(HttpClient);
  findSavedJob(offerId:string,userId:string):Observable<savedJobs[]>{
    return this.http.get<savedJobs[]>(`${environment.api}saveJobs`,{
      params:{
        offerId,
        userId
      }
    })
  }
  getUsersavedJobs(userId:string){
    return this.http.get<savedJobs[]>(`${environment.api}saveJobs`,{
      params:{
        userId
      }
    })
  }
  deleteSavedJob(id:string ){
    return this.http.delete(`${environment.api}saveJobs`,{
      params:{
        id
      }
    })
  }
}
