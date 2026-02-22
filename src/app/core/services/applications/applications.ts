import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Applications {
  private http = inject(HttpClient);
  apply(
    userId: number,
    offerId: string,
    apiSource: string,
    title: string,
    company: string,
    location: string,
    url: string,
    status: string,
  ) { 
    

  }
}
