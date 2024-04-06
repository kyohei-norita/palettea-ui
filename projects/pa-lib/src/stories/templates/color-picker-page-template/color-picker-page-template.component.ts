import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileInputButtonComponent} from "../../atoms/file-input-button/file-input-button.component";
import {PixelColorPickerComponent} from "../../molecules/pixel-color-picker/pixel-color-picker.component";

@Component({
  selector: 'pal-color-picker-page-template',
  standalone: true,
  imports: [CommonModule, FileInputButtonComponent, PixelColorPickerComponent],
  templateUrl: './color-picker-page-template.component.html',
  styleUrls: ['./color-picker-page-template.component.css']
})
export class ColorPickerPageTemplateComponent {
  readonly dataUrl = signal<string>('')
  readonly selectedColor = signal<string>('');
  fileLoaded(dataUrl: string) {
    this.dataUrl.set(dataUrl)
  }

  colorPicked(imageData: ImageData) {
    this.selectedColor.set(formatAsRgb(rgb(imageData)))
  }
}

type RGB = {
  r: number,
  g: number,
  b: number,
}

const rgb = (imageData: ImageData): RGB => ({
  r: imageData.data[0],
  g: imageData.data[1],
  b: imageData.data[2],
});

const formatAsRgb = (rgb: RGB) => `rgb(${rgb.r},${rgb.g},${rgb.b})`
