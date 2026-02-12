import { Component, inject } from '@angular/core';
import { JobCardes } from '../job-cardes/job-cardes';
import { PageNav } from "../page-nav/page-nav";
import { Store } from '@ngrx/store';
import { selectJobs, selectLoading } from '../../../../core/Stores/Jobs/job.feature';

@Component({
  selector: 'app-joblist',
  imports: [JobCardes, PageNav],
  templateUrl: './joblist.html',
  styleUrl: './joblist.css',
})
export class Joblist {
  private store :Store = inject(Store);
  Jobs$ = this.store.select(selectJobs);
  loading$ =this.store.select(selectLoading);
  
}
