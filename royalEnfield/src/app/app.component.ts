import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isMenuOpen = false; // Initially, menu is closed

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
  }
}

