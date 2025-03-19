import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() imgLink='';
  @Input() title='';
  @Input() price= 0;
  @Input() description="";
}
