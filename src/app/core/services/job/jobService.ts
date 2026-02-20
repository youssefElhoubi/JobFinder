import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../../Stores/Jobs/jobs.model';
import { environment } from '../../../../environment/environment';
import { savedJobs } from '../../../shared/models/savedJobOffers';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) { }

  fetchJobs(country: string = "us", page: number = 1, search: string | null, perpage: number = 5): Observable<Jobs> {
    const searchTerm = search ? search : '';
    const url = `${environment.jobApi}/${country}/search/${page}`;
    return this.http.get<Jobs>(url, {
      params: {
        results_per_page: perpage.toString(),
        what: searchTerm
      }
    });
  }
  saveJob(offerId: string, title: string, company: string, location: string):Observable<savedJobs> {
    return this.http.post<savedJobs>(`${environment.api}saveJobs`,{offerId,title,company,location});
  }
}
