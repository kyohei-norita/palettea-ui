import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  signal,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PickMarkComponent} from "../../atoms/pick-mark/pick-mark.component";
import * as assert from "assert";

@Component({
  selector: 'pal-pixel-color-picker',
  standalone: true,
  imports: [CommonModule, PickMarkComponent],
  templateUrl: './pixel-color-picker.component.html',
  styleUrls: ['./pixel-color-picker.component.css']
})
export class PixelColorPickerComponent implements OnInit, OnChanges, AfterViewInit {

  @Input({required: true}) dataUrl!: string;
  @Output() onColorPick = new EventEmitter<ImageData>();

  @ViewChild('palette') private _canvasElement!: ElementRef
  readonly position = signal({top: '0', left: '0'})
  private _canvasContext?: CanvasRenderingContext2D
  private readonly _img = new Image();

  ngOnInit(): void {
    this._img.onload = () => {
      assert(this._canvasContext)
      const shrinkageRateY = 400 / this._img.height;
      const shrinkageRateX = 400 / this._img.width;
      const shrinkageRate = (shrinkageRateY < shrinkageRateX) ? shrinkageRateY : shrinkageRateX;
      const canvasWidth = this._img.width * shrinkageRate;
      const canvasHeight = this._img.height * shrinkageRate;
      this._canvasContext.canvas.width = canvasWidth;
      this._canvasContext.canvas.height = canvasHeight;
      this._canvasContext.drawImage(this._img, 0, 0, canvasWidth, canvasHeight);
    }
  }

  ngOnChanges(): void {
    this._img.src = this.dataUrl;
  }

  ngAfterViewInit(): void {
    this._canvasContext = this._canvasElement.nativeElement.getContext('2d', {willReadFrequently: true});
  }

  pick(event: MouseEvent): void {
    this.position.set({
      'top': event.offsetY - 10 + 'px',
      'left': event.offsetX - 10 + 'px'
    });
    const imageData = this._canvasContext?.getImageData(event.offsetX, event.offsetY, 1, 1);
    this.onColorPick.emit(imageData);
  }

}
