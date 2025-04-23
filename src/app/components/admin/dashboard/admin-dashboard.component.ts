import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AdminDashboardComponent {
  totalSpots = 100;
  availableSpots = 30;
  bookedSpots = 70;
  activeUsers = 42;
  totalUsers = 150;

  recentActivities = [
    {
      icon: 'fas fa-user-plus text-green-500',
      message: 'New user "john_doe" registered',
      time: '10 minutes ago'
    },
    {
      icon: 'fas fa-parking text-blue-500',
      message: 'Parking spot B2 was booked',
      time: '25 minutes ago'
    },
    {
      icon: 'fas fa-calendar-times text-red-500',
      message: 'Booking #4582 was cancelled',
      time: '1 hour ago'
    },
    {
      icon: 'fas fa-cog text-purple-500',
      message: 'System settings updated',
      time: '2 hours ago'
    }
  ];

  getPercentage(value: number, total: number): string {
    return ((value / total) * 100).toFixed(1);
  }

  getIconClass(iconString: string): string {
    return iconString.split(' ')[0] + ' ' + iconString.split(' ')[1];
  }

  getIconColorClass(iconString: string): string {
    return iconString.split(' ')[2];
  }
}