import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type Beats = {
  title: string;
  description: string;
  imageUrl?: string;
  audioUrl: string;
  BPM: number;
  Key: string;
  price: number;
  tags: string[];
};

@Component({
  selector: 'app-beat-card',
  imports: [CommonModule],
  templateUrl: './beat-card.component.html',
  styleUrl: './beat-card.component.css',
})
export class BeatCardComponent {
  @Input() beat: Beats = {
    title: '',
    description: '',
    imageUrl: undefined,
    audioUrl: '',
    BPM: 0,
    Key: '',
    price: 0,
    tags: [],
  };

  get imageUrl(): string {
    return this.beat.imageUrl || 'default.jpg';
  }
}
