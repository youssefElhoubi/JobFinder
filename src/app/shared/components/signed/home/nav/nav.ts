import { Component, inject } from '@angular/core';
import { Redirect } from './../../../../service/redirect';
import { Store } from '@ngrx/store';
import { selectCount } from '../../../../../core/Stores/savedJobs/savedJobs.feature';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [AsyncPipe],
templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private redirection =  inject(Redirect);
  private store = inject(Store);
  count$ = this.store.select(selectCount)
  signOut(){
    localStorage.clear();
    this.redirection.navigator("/")
  }
}
