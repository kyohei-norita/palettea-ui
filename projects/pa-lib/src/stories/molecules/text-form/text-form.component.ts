import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormField} from "../../../lib/form-field";

export type TextFormInput = {
  label?: string,
  required: boolean,
  Validators?: ValidatorFn[]
}

@Component({
  selector: 'pal-text-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent extends FormField implements OnInit, OnChanges {
  @Input({required: true}) input!: TextFormInput;
  @Output() onChangeText = new EventEmitter<string>()
  readonly textFormControl = new FormControl<string>('', {nonNullable: true})
  private readonly _destroyRef= inject(DestroyRef)

  ngOnInit(): void {
    this.textFormControl
      .valueChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((value: string) => this.onChangeText.emit(value))
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.textFormControl.clearValidators()
    this.textFormControl.addValidators(this.input.Validators ?? [])
    if (this.input.required)
      this.textFormControl.addValidators(Validators.required)
  }

  validate(): boolean {
    this.textFormControl.markAsTouched();
    return this.textFormControl.valid;
  }
}
