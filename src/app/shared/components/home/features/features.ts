import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  features = [
    { title: 'AI Matching', desc: 'We match your skills to the perfect role.' },
    { title: 'Remote First', desc: 'Thousands of work-from-home opportunities.' },
    { title: 'Quick Apply', desc: 'Apply to jobs with just one click.' }
  ];

}
