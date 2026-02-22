import { Component, inject } from '@angular/core';
import { Nav } from "../../shared/components/signed/home/nav/nav";
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { savedJobsAction } from '../../core/Stores/savedJobs/savedJobs.action';


@Component({
  selector: 'app-signed-loayout',
  imports: [Nav, RouterOutlet],
  templateUrl: './signed-loayout.html',
  styleUrl: './signed-loayout.css',
})
export class SignedLoayout {
  private store  = inject(Store);
  ngOnInit(): void {
    
    this.store.dispatch(
      savedJobsAction.loadJobs()
    )
  }
}
