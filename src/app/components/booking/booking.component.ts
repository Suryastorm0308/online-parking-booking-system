import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BookingComponent implements OnInit {
  bookingDate: string = '';
  bookingTime: string = '';
  selectedSpot: string = '';
  availableSpots: string[] = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'D1'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const spotFromParams = params['spot'];
      if (spotFromParams && this.availableSpots.includes(spotFromParams)) {
        this.selectedSpot = spotFromParams;
      } else {
        this.selectedSpot = '';
      }
    });
  }

  confirmBooking(): void {
    if (!this.selectedSpot) {
      alert('Please select a parking spot');
      return;
    }
    alert(`Booking confirmed for ${this.selectedSpot} on ${this.bookingDate} at ${this.bookingTime}`);
  }

  goBack() {
    window.history.back();
  }
}