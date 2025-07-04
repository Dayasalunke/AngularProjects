import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  submittedData: any = null;

  onSubmit(form: any) {
    if (form.valid) {
      this.submittedData = form.value;
      console.log('Submitted:', this.submittedData);
      form.reset();
    }
  }
}
