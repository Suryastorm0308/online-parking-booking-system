import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {
  bookingDate: string | null = '';
  bookingTime: string | null = '';
  selectedSpot: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.bookingDate = params['date'];
      this.bookingTime = params['time'];
      this.selectedSpot = params['spot'];
    });
  }
}
