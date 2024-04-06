import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {PaintTablePageTemplateComponent} from "./paint-table-page-template.component";
import {TableCellType} from "../../organisms/table/table.component";

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
        colorPreview: {title: 'Color'},
        diff: {title: 'Diff'},
      },
      rows: [
        {
          name: {type: TableCellType.STRING, value: 'color name 1'},
          rgb: {type: TableCellType.STRING, value: 'rgb(255, 255, 50)'},
          colorPreview: {type: TableCellType.COLOR_PREVIEW, rgb: {r:255, g: 255, b: 50}},
          diff: {type: TableCellType.NUMBER, value: 0.98},
        },
        {
          name: {type: TableCellType.STRING, value: 'color name 2'},
          rgb: {type: TableCellType.STRING, value: 'rgb(200, 100, 50)'},
          colorPreview: {type: TableCellType.COLOR_PREVIEW, rgb: {r:200, g: 100, b: 50}},
          diff: {type: TableCellType.NUMBER, value: 1},
        }
      ]
    }
  },
};

