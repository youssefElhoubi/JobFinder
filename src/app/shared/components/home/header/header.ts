import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectJobs } from '../../../../core/Stores/Jobs/job.feature';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private store = inject(Store)
}
