import type {Meta, StoryObj} from '@storybook/angular';
import {FileInputButtonComponent} from "./file-input-button.component";

const meta: Meta<FileInputButtonComponent> = {
  title: 'Atoms/FileInputButton',
  component: FileInputButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FileInputButtonComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-file-input-button>ファイルを選択</pal-file-input-button>
    `,
  }),
};
