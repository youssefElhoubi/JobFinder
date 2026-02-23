import { Component, Input } from '@angular/core';
import { application } from '../../../models/application';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-application-card',
  imports: [DatePipe],
  templateUrl: './application-card.html',
  styleUrl: './application-card.css',
})
export class ApplicationCard {
  @Input() applications!: application

  // Helper function to dynamically style the status badge
  getStatusClass(status: string): string {
    const baseClasses = 'px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide';
    switch (status.toLowerCase()) {
      case 'accepted': return `${baseClasses} bg-green-100 text-green-800`;
      case 'rejected': return `${baseClasses} bg-red-100 text-red-800`;
      case 'interview': return `${baseClasses} bg-purple-100 text-purple-800`;
      case 'pending': return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default: return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }
}
