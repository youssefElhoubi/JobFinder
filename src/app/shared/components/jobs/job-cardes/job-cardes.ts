import { Component, inject, Input } from '@angular/core';
import { Result } from '../../../../core/Stores/Jobs/jobs.model';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { JobService } from './../../../../core/services/job/jobService';

@Component({
  selector: 'app-job-cardes',
  imports: [FaIconComponent],
  templateUrl: './job-cardes.html',
  styleUrl: './job-cardes.css',
})
export class JobCardes {
  private jobService = inject(JobService);
  @Input() job!: Result
  bookmark = faRegularBookmark
  saveJobPost(offerId: string, title: string, company: string, location: string) {
    this.jobService.saveJob(offerId, title, company, location).subscribe({
      next:(value)=>{
        console.log(value);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
  }

}
