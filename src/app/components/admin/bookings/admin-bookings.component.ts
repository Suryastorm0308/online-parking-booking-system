import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss']
})
export class AdminBookingsComponent {
  bookings = [
    { id: 101, userName: 'John Doe', spotId: 'A1', status: 'Pending', date: new Date('2023-06-15') },
    { id: 102, userName: 'Jane Smith', spotId: 'B1', status: 'Confirmed', date: new Date('2023-06-16') },
    { id: 103, userName: 'Mike Johnson', spotId: 'C2', status: 'Cancelled', date: new Date('2023-06-14') }
  ];

  statusFilter = 'all';
  filteredBookings = [...this.bookings];

  filterBookings() {
    if (this.statusFilter === 'all') {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter(
        booking => booking.status.toLowerCase() === this.statusFilter
      );
    }
  }

  approveBooking(id: number) {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = 'Confirmed';
      this.filterBookings();
    }
    console.log('Approved booking:', id);
  }

  cancelBooking(id: number) {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = 'Cancelled';
      this.filterBookings();
    }
    console.log('Cancelled booking:', id);
  }
}