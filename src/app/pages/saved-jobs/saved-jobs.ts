import { Component } from '@angular/core';
import { SavedJobsCard } from "../../shared/components/savedjobs/saved-jobs-card/saved-jobs-card";
import { SavedJobsList } from "../../shared/components/savedjobs/saved-jobs-list/saved-jobs-list";

@Component({
  selector: 'app-saved-jobs',
  imports: [ SavedJobsList],
  templateUrl: './saved-jobs.html',
  styleUrl: './saved-jobs.css',
})
export class SavedJobs {

}
