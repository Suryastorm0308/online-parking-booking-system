import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './components/admin/dashboard/admin-dashboard.component';
import { AdminParkingComponent } from './components/admin/parking/admin-parking.component';
import { AdminBookingsComponent } from './components/admin/bookings/admin-bookings.component';
import { AdminUsersComponent } from './components/admin/users/admin-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'confirmation', component: ConfirmationComponent },

  // Admin routes
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/parking-spots', component: AdminParkingComponent },
  { path: 'admin/bookings', component: AdminBookingsComponent },
  { path: 'admin/users', component: AdminUsersComponent },

  // Wildcard must come LAST
  { path: '**', redirectTo: 'login' }
];
