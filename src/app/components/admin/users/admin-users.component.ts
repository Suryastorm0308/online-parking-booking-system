import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
  searchQuery = '';
  filteredUsers: User[] = []; // Add type annotation here

  users: User[] = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      role: 'Customer', 
      status: 'Active',
      avatar: 'assets/user1.jpg'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      role: 'Admin', 
      status: 'Active',
      avatar: 'assets/user2.jpg'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      role: 'Customer', 
      status: 'Inactive',
      avatar: 'assets/user3.jpg'
    }
  ];

  constructor() {
    this.filteredUsers = [...this.users];
  }

  filterUsers() {
    if (!this.searchQuery) {
      this.filteredUsers = [...this.users];
      return;
    }
    
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(
      user => 
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }

  editUser(id: number) {
    console.log('Edit user:', id);
    // Implement edit functionality
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.filterUsers();
    console.log('Deleted user:', id);
  }
}