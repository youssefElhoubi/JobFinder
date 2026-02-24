import { Component, inject, Input } from '@angular/core';
import { application } from '../../../models/application';
import { DatePipe } from '@angular/common';
import { Applications } from '../../../../core/services/applications/applications';

@Component({
  selector: 'app-application-card',
  imports: [DatePipe],
  templateUrl: './application-card.html',
  styleUrl: './application-card.css',
})
export class ApplicationCard {
  @Input() applications!: application
  private applicationsService = inject(Applications)
  
  onStatusChange(event: Event, app: application) {
    // 1. Get the new value from the dropdown
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value;

    // 2. Update the UI immediately so it feels fast
    app.status = newStatus;

    // 3. Send the update to your backend
    // (Assuming you have an update method in your service)
    this.applicationsService.updateStatus(app.id, newStatus).subscribe({
      next: () => console.log(`Status for ${app.title} updated to ${newStatus}`),
      error: (err) => {
        console.error('Failed to update status', err);
        // Optional: Revert the UI back to the old status if the API fails
      }
    });
  }

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
