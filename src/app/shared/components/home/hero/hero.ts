import { Component, ElementRef, inject, SimpleChanges, ViewChild } from '@angular/core';
import { Joblist } from "../../jobs/joblist/joblist";
import { FormsModule, NgForm } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectError, selectJobs, selectLoading } from '../../../../core/Stores/Jobs/job.feature';
import { JobActions } from '../../../../core/Stores/Jobs/jobs.actions';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { urlActions } from '../../../../core/Stores/url/url.actions';



@Component({
  selector: 'app-hero',
  imports: [Joblist, FormsModule, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private store: Store = inject(Store);
  searchInput: string = '';
  country: string = "";
  perPage: number = 1;
  Jobs$ = this.store.select(selectJobs);
  Loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  COUNTRIES = [
    { name: 'Austria', code: 'at' },
    { name: 'Australia', code: 'au' },
    { name: 'Belgium', code: 'be' },
    { name: 'Brazil', code: 'br' },
    { name: 'Canada', code: 'ca' },
    { name: 'Switzerland', code: 'ch' },
    { name: 'Germany', code: 'de' },
    { name: 'Spain', code: 'es' },
    { name: 'France', code: 'fr' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'India', code: 'in' },
    { name: 'Italy', code: 'it' },
    { name: 'Mexico', code: 'mx' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'New Zealand', code: 'nz' },
    { name: 'Poland', code: 'pl' },
    { name: 'Singapore', code: 'sg' },
    { name: 'United States', code: 'us' },
    { name: 'South Africa', code: 'za' }
  ]
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.store.dispatch(
      urlActions.makeURL({
        country: this.country, page: 1, search: this.searchInput, perPage: this.perPage
      })
    )
  }
}
