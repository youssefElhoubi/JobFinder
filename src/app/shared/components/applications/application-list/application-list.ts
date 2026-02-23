import { Component } from '@angular/core';
import { application } from '../../../models/application';
import { ApplicationCard } from "../application-card/application-card";

@Component({
  selector: 'app-application-list',
  imports: [ApplicationCard],
  templateUrl: './application-list.html',
  styleUrl: './application-list.css',
})
export class ApplicationList {
applications: application[] = []
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
