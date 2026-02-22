import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSavedjobs } from '../../../../core/Stores/savedJobs/savedJobs.feature';
import { SavedJobsCard } from "../saved-jobs-card/saved-jobs-card";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-saved-jobs-list',
  imports: [SavedJobsCard, AsyncPipe],
  templateUrl: './saved-jobs-list.html',
  styleUrl: './saved-jobs-list.css',
})
export class SavedJobsList {
  private store = inject(Store);
  jobs$ = this.store.select(selectSavedjobs)
}
