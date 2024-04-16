import type {Meta, StoryObj} from '@storybook/angular';
import {TextFormComponent} from "./text-form.component";

const meta: Meta<TextFormComponent> = {
  title: 'Molecules/TextForm',
  component: TextFormComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TextFormComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-text-form></pal-text-form>
    `,
  }),
};
