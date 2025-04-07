import { Component } from '@angular/core';
import {
  BeatCardComponent,
  Beats,
} from '../../../common/beat-card/beat-card.component';
import { CommonModule } from '@angular/common';

const beats: Beats[] = [
  {
    title: 'Chill Vibes',
    description: 'Relaxing beats for studying or working.',
    imageUrl: '/il1.jpg',
    audioUrl: 'https://example.com/chill-vibes.mp3',
    BPM: 80,
    Key: 'C Major',
    price: 10.99,
    tags: ['chill', 'study', 'relax'],
  },
  {
    title: 'Upbeat Pop',
    description: 'Catchy and energetic pop beats.',
    imageUrl: '/il2.jpg',
    audioUrl: 'https://example.com/upbeat-pop.mp3',
    BPM: 120,
    Key: 'G Major',
    price: 15.99,
    tags: ['pop', 'upbeat', 'energetic'],
  },
  {
    title: 'Hip Hop Beats',
    description: 'Hard-hitting beats for rap and hip-hop.',
    imageUrl: '/il3.jpg',
    audioUrl: 'https://example.com/hip-hop-beats.mp3',
    BPM: 90,
    Key: 'D Minor',
    price: 12.25,
    tags: ['hip-hop', 'rap', 'hard-hitting'],
  },
  {
    title: 'Lo-fi Chill',
    description: 'Smooth lo-fi beats for relaxation.',
    imageUrl: '/il4.jpg',
    audioUrl: 'https://example.com/lofi-chill.mp3',
    BPM: 70,
    Key: 'A Minor',
    price: 8.99,
    tags: ['lo-fi', 'chill', 'relaxation'],
  },
  {
    title: 'Electronic Dance',
    description: 'High-energy beats for dancing.',
    audioUrl: 'https://example.com/electronic-dance.mp3',
    BPM: 128,
    Key: 'F# Major',
    price: 14.99,
    tags: ['electronic', 'dance', 'high-energy'],
  },
];

@Component({
  selector: 'app-beats-pages',
  imports: [CommonModule, BeatCardComponent],
  templateUrl: './beats-pages.component.html',
  styleUrl: './beats-pages.component.css',
})
export class BeatsPagesComponent {
  beats: Beats[] = beats;
}
