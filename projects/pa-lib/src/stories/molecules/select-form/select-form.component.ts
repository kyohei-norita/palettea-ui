import {Component, ElementRef, EventEmitter, HostListener, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormField} from "../../../lib/form-field";
import {ValidatorFn} from "@angular/forms";

export type Option = {
  label: string,
  value: string,
}

export type SelectFormInput = {
  label?: string,
  options: Option[],
  required: boolean,
}

@Component({
  selector: 'pal-select-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent extends FormField {
  @Input({required: true}) input!: SelectFormInput;
  @Output() onSelect = new EventEmitter<Option>();

  private readonly _eRef = inject(ElementRef);
  selectedOption?: Option;
  isOpen = false;
  isInvalid = false;

  validate(): boolean {
    if (this.input.required && this.selectedOption === undefined) {
      this.isInvalid = true;
      return false;
    } else {
      this.isInvalid = false;
      return true;
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: Option): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.onSelect.emit(option);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this._eRef.nativeElement.contains(event.target) && this.isOpen) {
      this.toggleDropdown();
    }
  }
}
