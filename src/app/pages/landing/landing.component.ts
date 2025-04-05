import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, NavbarComponent, MatIconModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
