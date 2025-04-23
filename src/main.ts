import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { BookingComponent } from './app/components/booking/booking.component';
import { LoginComponent } from './app/login/login.component';
import { AdminDashboardComponent } from './app/components/admin/dashboard/admin-dashboard.component';
import { AdminParkingComponent } from './app/components/admin/parking/admin-parking.component';
import { AdminBookingsComponent } from './app/components/admin/bookings/admin-bookings.component';
import { AdminUsersComponent } from './app/components/admin/users/admin-users.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'login', component: LoginComponent },// Login Page


      // Admin routes
      { path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'admin/parking-spots', component: AdminParkingComponent },
      { path: 'admin/bookings', component: AdminBookingsComponent },
      { path: 'admin/users', component: AdminUsersComponent },

      // Fallback
      { path: '**', redirectTo: '' }

    ])
  ]
});
