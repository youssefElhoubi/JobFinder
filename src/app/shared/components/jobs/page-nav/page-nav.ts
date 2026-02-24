import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { selectPage, selectPerPage } from '../../../../core/Stores/url/url.feature';
// import { selectTotalJobs } from '...'; // <-- WE NEED THIS

@Component({
  selector: 'app-page-nav',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './page-nav.html',
  styleUrl: './page-nav.css',
})
export class PageNav {
  store = inject(Store);
  
  page$ = this.store.select(selectPage);
  perPage$ = this.store.select(selectPerPage);
  
  // placeholder for what we need to calculate pages
  // totalJobs$ = this.store.select(selectTotalJobs); 

  // This will eventually hold our array of numbers: [1, 2, 3, 4]
  pagesArray$!: Observable<number[]>; 
  totalPages$!: Observable<number>;

  goToPage(pageNumber: number) {
    // We will dispatch your store action here
    console.log('Go to page:', pageNumber);
  }

  prevPage() {
    // Logic to go back 1
  }

  nextPage() {
    // Logic to go forward 1
  }
}