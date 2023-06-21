import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      syncWithCris: {{ syncWithCris }}
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent {
  @Input('sync_with_cris') syncWithCris?: boolean;
}
