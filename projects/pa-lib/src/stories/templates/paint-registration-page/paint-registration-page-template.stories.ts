import {argsToTemplate, Meta, StoryObj} from '@storybook/angular';
import {PaintRegistrationPageTemplateComponent} from "./paint-registration-page-template.component";
import {Option} from "../../molecules/select-form/select-form.component";

const meta: Meta<PaintRegistrationPageTemplateComponent> = {
  title: 'Templates/PaintRegistrationPageTemplate',
  component: PaintRegistrationPageTemplateComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PaintRegistrationPageTemplateComponent>;


const COATING_TYPE_SELECT_OPTIONS: Option[] = [
  {
    label: 'ラッカー',
    value: 'LACQUER',
  },
  {
    label: 'アクリル',
    value: 'ACRYLIC',
  },
  {
    label: 'エナメル',
    value: 'ENAMEL',
  },
]

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-paint-registration-page-template ${argsToTemplate(args)}/>
    `
  }),
  args: {
    input: {
      pageTitle: 'Title',
      forms: {
        paintName: {
          label: 'paintName',
        },
        colorCode: {
          label: 'colorCode',
        },
        coatingType: {
          label: 'coatingType',
          options: COATING_TYPE_SELECT_OPTIONS,
        },
      },
      buttonName: 'register',
    }
  },
};
