import type {Meta, StoryObj} from '@storybook/angular';
import {PickMarkComponent} from "./pick-mark.component";

const meta: Meta<PickMarkComponent> = {
  title: 'Atoms/PickMark',
  component: PickMarkComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PickMarkComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-pick-mark/>
    `,
  }),
};
