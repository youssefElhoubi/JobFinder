import { Component, Input } from '@angular/core';
import { savedJobs } from '../../../../core/Stores/savedJobs/savedJobs.model';

@Component({
  selector: 'app-saved-jobs-card',
  imports: [],
  templateUrl: './saved-jobs-card.html',
  styleUrl: './saved-jobs-card.css',
})
export class SavedJobsCard {
  @Input() savedJob!:savedJobs;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      console.log(this.savedJob);
      
  }
}
