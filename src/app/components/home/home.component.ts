import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  bookParking(spotName: string) {
    console.log('Navigating to booking page with:', spotName);
    this.router.navigate(['/booking'], { queryParams: { spot: spotName } }).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.error('Navigation failed');
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
