import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-hero.component.html',
  styleUrl: './my-hero.component.css',
})
export class MyHeroComponent {
  @Input()
  title?: string;

  @Input()
  desc?: string;
}
