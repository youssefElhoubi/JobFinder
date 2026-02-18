import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Redirect {
  private router = inject(Router)
  navigator(path:string){
    this.router.navigateByUrl(path);
  }
}
