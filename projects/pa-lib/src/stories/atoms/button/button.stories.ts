import type {Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-button>register</pal-button>
    `,
  }),
};
