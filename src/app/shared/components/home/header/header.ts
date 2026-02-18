import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Redirect } from '../../../service/redirect';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router)
  redirector = inject(Redirect);
}
