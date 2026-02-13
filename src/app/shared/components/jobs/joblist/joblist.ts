import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { JobCardes } from '../job-cardes/job-cardes';
import { PageNav } from "../page-nav/page-nav";
import { Store } from '@ngrx/store';
import { selectJobs, selectLoading } from '../../../../core/Stores/Jobs/job.feature';
import { Result } from '../../../../core/Stores/Jobs/jobs.model';

@Component({
  selector: 'app-joblist',
  imports: [JobCardes, PageNav],
  templateUrl: './joblist.html',
  styleUrl: './joblist.css',
})
export class Joblist {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  private store: Store = inject(Store);
  jobs: Result[] = [];
  Jobs$ = this.store.select(selectJobs);
  loading$ = this.store.select(selectLoading);
  ngOnInit() {
    this.Jobs$.subscribe(data => this.jobs = data?.results ?? [] )
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
  }

}
