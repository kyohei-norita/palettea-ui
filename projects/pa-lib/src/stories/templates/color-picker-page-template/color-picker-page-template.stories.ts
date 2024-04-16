import {argsToTemplate, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ColorPickerPageTemplateComponent} from "./color-picker-page-template.component";
import {Table} from "../../organisms/table/table.component";
import * as PaintTablePageTemplate  from "../paint-table-page-template/paint-table-page-template.stories";
import {
  PaintTablePageTemplateComponent,
  PaintTablePageTemplateInput
} from "../paint-table-page-template/paint-table-page-template.component";
const meta: Meta<ColorPickerPageTemplateComponent> = {
  title: 'Templates/ColorPickerPageTemplate',
  component: ColorPickerPageTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        PaintTablePageTemplateComponent,
      ],
    }),
  ],
};

export default meta;
type ColorPickerPagePropsAndOtherPageProps = ColorPickerPageTemplateComponent & {
  paintTablePageInput: PaintTablePageTemplateInput
}
type Story = StoryObj<ColorPickerPagePropsAndOtherPageProps>;

export const Default: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-color-picker-page-template ${argsToTemplate(args)}>
        ng-content
      </pal-color-picker-page-template>
    `
  }),
  args: {
    input: {
      pageTitle: 'Title',
    }
  },
};

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-color-picker-page-template ${argsToTemplate(args)}>
        <pal-paint-table-page-template [input]="paintTablePageInput"/>
      </pal-color-picker-page-template>
    `
  }),
  args: {
    input: {
      pageTitle: 'Title',
    },
    paintTablePageInput: PaintTablePageTemplate.Example.args?.input
  },
};


