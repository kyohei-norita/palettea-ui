import type {Meta, StoryObj} from '@storybook/angular';
import {IconButtonComponent} from "./icon-button.component";

const meta: Meta<IconButtonComponent> = {
  title: 'Atoms/IconButton',
  component: IconButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-icon-button>star</pal-icon-button>
    `,
  }),
};
