import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Ajoutez cette ligne
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  standalone: true,
  imports: [CommonModule]  // Ajoutez cette ligne
})
export class ListUserComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }

  calculateUsers() {
    const numberOfCustomers = this.userService.fetchNbInList(this.users, 'accountCategory', 'Customer');
    console.log(`Number of Customers: ${numberOfCustomers}`);
  }
}
