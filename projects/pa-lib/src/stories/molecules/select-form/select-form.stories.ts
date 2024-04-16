import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {SelectFormComponent} from "./select-form.component";

const meta: Meta<SelectFormComponent> = {
  title: 'Molecules/SelectForm',
  component: SelectFormComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectFormComponent>;

export const Example: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
      <pal-select-form ${argsToTemplate(args)}></pal-select-form>
    `,
  }),
  args: {
    input: {
      label: 'ラベル',
      options: [
        {
          label: 'Option 1',
          value: '1',
        },
        {
          label: 'Option 2',
          value: '2',
        }
      ],
      required: true,
    },
  }
};
