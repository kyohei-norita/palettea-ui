import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'pal-file-input-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-input-button.component.html',
  styleUrls: ['./file-input-button.component.css']
})
export class FileInputButtonComponent implements OnInit {

  @Output() onFileLoad = new EventEmitter<string>();
  private readonly _reader = new FileReader();

  ngOnInit(): void {
    this._reader.onload = () => {
      const result = this._reader.result;
      if (result === null) return;
      if (typeof result === "string") {
        this.onFileLoad.emit(result);
      } else {
        console.log("ArrayBuffer data is not supported.");
      }
    }
  }

  change(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];
      if (file === undefined) return;
      this._reader.readAsDataURL(file);
    }
  }
}
