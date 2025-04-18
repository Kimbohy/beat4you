import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-description',
  imports: [CartComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {}
