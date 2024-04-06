import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {TableCellType, TableComponent} from "./table.component";

const meta: Meta<TableComponent<any>> = {
  title: 'Organisms/Table',
  component: TableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TableComponent<['id', 'name', 'age']>>;

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-table ${argsToTemplate(args)}/>
    `
  }),
  args: {
    dataSource: {
      headers: {
        'id': {title: 'ID'},
        'name': {title: 'NAME'},
        'age': {title: 'AGE'},
      },
      rows: [
        {
          'id': {type: TableCellType.STRING, value: 'id1'},
          'name': {type: TableCellType.STRING, value: 'test1'},
          'age': {type: TableCellType.NUMBER, value: 10},
        },
        {
          'id': {type: TableCellType.STRING, value: 'id2'},
          'name': {type: TableCellType.STRING, value: 'test2'},
          'age': {type: TableCellType.NUMBER, value: 20},
        }
      ],
    }
  },
};

