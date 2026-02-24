import { Component, inject, Input } from '@angular/core';
import { Result } from '../../../../core/Stores/Jobs/jobs.model';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { JobService } from './../../../../core/services/job/jobService';
import { SavedJobs } from '../../../../core/services/job/saved-jobs';
import { EMPTY, of, switchMap } from 'rxjs';
import { showToast } from '../../../popUps/swalPopUps';
import { Applications } from '../../../../core/services/applications/applications';

@Component({
  selector: 'app-job-cardes',
  imports: [FaIconComponent],
  templateUrl: './job-cardes.html',
  styleUrl: './job-cardes.css',
})
export class JobCardes {
  private jobService = inject(JobService);
  private savedJobservice = inject(SavedJobs);
  private applicationsService = inject(Applications);

  @Input() job!: Result
  bookmark = faRegularBookmark
  saveJobPost(offerId: string, title: string, company: string, location: string) {
    const user: string = JSON.parse(localStorage.getItem("user") || "null")

    this.savedJobservice.findSavedJob(offerId, user).pipe(
      switchMap((value) => {
        if (value.length !== 0) {

          showToast("you have alredy added thisjob to user saved list", false);
          return EMPTY;
        }
        return this.jobService.saveJob(offerId, title, company, location);
      })
    ).subscribe({
      next: () => {
        showToast("Job saved successfully!", true)
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  apply(offerId: string,
    title: string,
    company: string,
    location: string,
    url: string) {
    const application = {
      userId: localStorage.getItem("user") || "",
      offerId,
      title,
      company,
      location,
      url,
      status: "pending ",
    }
    this.applicationsService.apply(application).subscribe();
    window.open(url);
  }

}
