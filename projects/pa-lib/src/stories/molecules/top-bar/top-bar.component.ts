import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'pal-top-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

}
