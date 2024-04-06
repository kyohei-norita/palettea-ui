import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {PixelColorPickerComponent} from "./pixel-color-picker.component";
import {sampleData} from "./sample-data";

const meta: Meta<PixelColorPickerComponent> = {
  title: 'Molecules/PixelColorPicker',
  component: PixelColorPickerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PixelColorPickerComponent>;

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-pixel-color-picker ${argsToTemplate(args)}/>
    `
  }),
  args: {
    dataUrl: sampleData,
  },
};
