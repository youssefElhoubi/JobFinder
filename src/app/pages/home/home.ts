import { Component } from '@angular/core';
import { Hero } from '../../shared/components/home/hero/hero';
import { Qna } from '../../shared/components/home/qna/qna';
import { Features } from '../../shared/components/home/features/features';

@Component({
  selector: 'app-home',
  imports: [Hero,Qna,Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
  }
}
