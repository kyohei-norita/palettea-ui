import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {ColorPickerPageTemplateComponent} from "./color-picker-page-template.component";

const meta: Meta<ColorPickerPageTemplateComponent> = {
  title: 'Templates/ColorPickerPageTemplate',
  component: ColorPickerPageTemplateComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ColorPickerPageTemplateComponent>;

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-color-picker-page-template ${argsToTemplate(args)}/>
    `
  }),
  args: {

  },
};

