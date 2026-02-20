import { Component, Input } from '@angular/core';
import { Result } from '../../../../core/Stores/Jobs/jobs.model';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-job-cardes',
  imports: [FaIconComponent],
  templateUrl: './job-cardes.html',
  styleUrl: './job-cardes.css',
})
export class JobCardes {
  @Input() job!: Result 
  bookmark = faRegularBookmark
  saveJobPost(id:string){
    console.log(id);
  }

}
