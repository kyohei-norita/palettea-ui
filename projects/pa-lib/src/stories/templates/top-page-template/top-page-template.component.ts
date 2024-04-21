import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../../molecules/top-bar/top-bar.component";
import {IconButtonComponent} from "../../atoms/icon-button/icon-button.component";

@Component({
  selector: 'pal-top-page-template',
  standalone: true,
  imports: [CommonModule, TopBarComponent, IconButtonComponent],
  templateUrl: './top-page-template.component.html',
  styleUrls: ['./top-page-template.component.css']
})
export class TopPageTemplateComponent {
  @Output() onClickSearch = new EventEmitter<void>();
  @Output() onClickRegister = new EventEmitter<void>();
}
