import { Component } from '@angular/core';
import { SavedJobsCard } from "../../shared/components/savedjobs/saved-jobs-card/saved-jobs-card";

@Component({
  selector: 'app-saved-jobs',
  imports: [SavedJobsCard],
  templateUrl: './saved-jobs.html',
  styleUrl: './saved-jobs.css',
})
export class SavedJobs {

}
