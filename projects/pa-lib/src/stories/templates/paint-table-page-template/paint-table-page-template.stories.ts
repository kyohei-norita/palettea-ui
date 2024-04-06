import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {PaintTablePageTemplateComponent} from "./paint-table-page-template.component";

const meta: Meta<PaintTablePageTemplateComponent> = {
  title: 'Templates/PaintTablePageTemplate',
  component: PaintTablePageTemplateComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PaintTablePageTemplateComponent>;

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-paint-table-page-template ${argsToTemplate(args)}/>
    `
  }),
  args: {
    dataSource: {
      headers: {
        name: {title: 'Name'},
        rgb: {title: 'RGB'},
        color: {title: 'Color'},
        diff: {title: 'Diff'},
      },
      rows: [
        {
          name: {type: 'string', value: 'color name 1'},
          rgb: {type: 'string', value: 'rgb(255, 255, 255)'},
          color: {type: 'string', value: 'rgb(255, 255, 255)'},
          diff: {type: 'number', value: 0.98},
        },
        {
          name: {type: 'string', value: 'color name 2'},
          rgb: {type: 'string', value: 'rgb(0, 0, 0)'},
          color: {type: 'string', value: 'rgb(0, 0, 0)'},
          diff: {type: 'number', value: 1},
        }
      ]
    }
  },
};

