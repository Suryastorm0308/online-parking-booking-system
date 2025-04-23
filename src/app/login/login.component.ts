import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Use bracket notation to access form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = ''; // Reset error message on each submit

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Mock login check (Replace with actual authentication API call)
    if (email === 'admin@example.com' && password === 'password123') {
      localStorage.setItem('user', JSON.stringify({ email }));
      this.router.navigate(['/dashboard']); // Redirect after login
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
  goBack() {
    window.history.back(); // Navigates to the previous page
  }
}
