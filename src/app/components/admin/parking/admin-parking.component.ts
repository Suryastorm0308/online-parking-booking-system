import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-parking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-parking.component.html',
  styleUrls: ['./admin-parking.component.scss']
})
export class AdminParkingComponent {
  showAddSpotModal = false;
  editingSpot: any = null;
  newSpot = {
    id: 0,
    location: '',
    type: 'Standard',
    status: 'Available'
  };

  parkingSpots = [
    { id: 1, location: 'North Lot', type: 'Standard', status: 'Available' },
    { id: 2, location: 'South Lot', type: 'Premium', status: 'Booked' },
    { id: 3, location: 'East Lot', type: 'Standard', status: 'Available' }
  ];

  openAddSpotModal() {
    this.editingSpot = null;
    this.newSpot = {
      id: this.parkingSpots.length + 1,
      location: '',
      type: 'Standard',
      status: 'Available'
    };
    this.showAddSpotModal = true;
  }

  editSpot(id: number) {
    this.editingSpot = this.parkingSpots.find(spot => spot.id === id);
    this.newSpot = { ...this.editingSpot };
    this.showAddSpotModal = true;
  }

  saveSpot() {
    if (this.editingSpot) {
      // Update existing spot
      const index = this.parkingSpots.findIndex(spot => spot.id === this.editingSpot.id);
      this.parkingSpots[index] = { ...this.newSpot };
    } else {
      // Add new spot
      this.parkingSpots.push({ ...this.newSpot });
    }
    this.closeModal();
  }

  deleteSpot(id: number) {
    this.parkingSpots = this.parkingSpots.filter(spot => spot.id !== id);
    console.log('Deleted spot:', id);
  }

  closeModal() {
    this.showAddSpotModal = false;
    this.editingSpot = null;
  }
}