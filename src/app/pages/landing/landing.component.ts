import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BeatsPagesComponent } from './beats-pages/beats-pages.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    CommonModule,
    NavbarComponent,
    MatIconModule,
    BeatsPagesComponent,
    DescriptionComponent,
    FooterComponent
],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
