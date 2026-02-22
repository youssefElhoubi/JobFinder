import { Component, inject, Input } from '@angular/core';
import { savedJobs } from '../../../../core/Stores/savedJobs/savedJobs.model';
import { Store } from '@ngrx/store';
import { savedJobsAction } from '../../../../core/Stores/savedJobs/savedJobs.action';

@Component({
  selector: 'app-saved-jobs-card',
  imports: [],
  templateUrl: './saved-jobs-card.html',
  styleUrl: './saved-jobs-card.css',
})
export class SavedJobsCard {
  @Input() savedJob!:savedJobs;
  private store  =  inject(Store);
  deleteOffer(id: string ){
    this.store.dispatch(savedJobsAction.removeJob({id}))
  }
}
