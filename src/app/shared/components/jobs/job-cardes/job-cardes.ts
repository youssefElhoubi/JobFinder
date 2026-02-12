import { Component, Input } from '@angular/core';
import { Result } from '../../../../core/Stores/Jobs/jobs.model';

@Component({
  selector: 'app-job-cardes',
  imports: [],
  templateUrl: './job-cardes.html',
  styleUrl: './job-cardes.css',
})
export class JobCardes {
  @Input() job!: Result 

}
