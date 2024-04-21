import type {Meta, StoryObj} from '@storybook/angular';
import {TopBarComponent} from "./top-bar.component";

const meta: Meta<TopBarComponent> = {
  title: 'Molecules/TopBar',
  component: TopBarComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TopBarComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-top-bar></pal-top-bar>
    `,
  }),
};
