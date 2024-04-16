import {Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextFormComponent} from "../../molecules/text-form/text-form.component";
import {Option, SelectFormComponent} from "../../molecules/select-form/select-form.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {FormField} from "../../../lib/form-field";

export type PaintRegistrationPageTemplateInput = Readonly<{
  pageTitle: string,
  forms: {
    paintName: {
      label: string,
      value?: string,
    },
    colorCode: {
      label: string,
      value?: string,
    },
    coatingType: {
      label: string,
      options: Option[],
      value?: string,
    },
  },
  buttonName: string,
}>
export type PaintRegistrationPageTemplateOutput = Readonly<{
  paintName: string,
  colorCode: string,
  coatingType: string,
}>

@Component({
  selector: 'pal-paint-registration-page-template',
  standalone: true,
  imports: [CommonModule, TextFormComponent, SelectFormComponent, ButtonComponent],
  templateUrl: './paint-registration-page-template.component.html',
  styleUrls: ['./paint-registration-page-template.component.css']
})
export class PaintRegistrationPageTemplateComponent {
  @Input({required: true}) input!: PaintRegistrationPageTemplateInput;
  @Output() onClickRegisterButton: EventEmitter<PaintRegistrationPageTemplateOutput> = new EventEmitter();

  @ViewChildren(FormField) formFields!: QueryList<FormField>;
  private partialOutput?: Partial<PaintRegistrationPageTemplateOutput>;

  changePaintName(paintName: string) {
    this.partialOutput = {...this.partialOutput, paintName: paintName}
  }
  changeColorCode(colorCode: string) {
    this.partialOutput = {...this.partialOutput, colorCode: colorCode}
  }
  changeCoatingType(coatingType: string) {
    this.partialOutput = {...this.partialOutput, coatingType: coatingType}
  }
  register() {
    const isValid = this.formFields
      .map(f => f.validate())
      .reduce((acc, cur) => acc && cur, true)
    if (isValid) {
      console.log(this.partialOutput);
      return
    }
    const output = validateAndCompletePaintRegistration(this.partialOutput)
    this.onClickRegisterButton.emit(output)
  }
}

function validateAndCompletePaintRegistration(
  partialOutput?: Partial<PaintRegistrationPageTemplateOutput>
): PaintRegistrationPageTemplateOutput {
  if (!partialOutput) {
    throw new Error("No input provided");
  }
  const { paintName, colorCode, coatingType } = partialOutput;
  if (!paintName || !colorCode || !coatingType) {
    throw new Error("Missing required fields");
  }
  return {
    paintName: paintName,
    colorCode: colorCode,
    coatingType: coatingType,
  };
}
