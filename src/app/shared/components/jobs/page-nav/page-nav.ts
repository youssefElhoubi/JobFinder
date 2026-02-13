import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPage, selectPerPage } from '../../../../core/Stores/url/url.feature';
import { selectJobs } from '../../../../core/Stores/Jobs/job.feature';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-page-nav',
  imports: [AsyncPipe],
  templateUrl: './page-nav.html',
  styleUrl: './page-nav.css',
})
export class PageNav {
  store = inject(Store);
  page$ = this.store.select(selectPage)
  perPage$= this.store.select(selectPerPage)
  jobs$= this.store.select(selectJobs)
  pagecount=0;
  ngOnInit(): void {
  }

}
