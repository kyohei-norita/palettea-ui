import {argsToTemplate, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {TopPageTemplateComponent} from "./top-page-template.component";
import {
  PaintRegistrationPageTemplateComponent,
  PaintRegistrationPageTemplateInput
} from "../paint-registration-page/paint-registration-page-template.component";
import * as PaintRegistrationPageTemplateStories
  from "../paint-registration-page/paint-registration-page-template.stories";

const meta: Meta<TopPageTemplateComponent> = {
  title: 'Templates/TopPageTemplate',
  component: TopPageTemplateComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        PaintRegistrationPageTemplateComponent,
      ],
    }),
  ],
};

export default meta;
type TopPagePagePropsAndOtherPageProps = TopPageTemplateComponent & {
  paintRegistrationPageInput: PaintRegistrationPageTemplateInput
}
type Story = StoryObj<TopPagePagePropsAndOtherPageProps>;

export const Default: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-top-page-template ${argsToTemplate(args)}>
        ng-content
      </pal-top-page-template>
    `
  }),
  args: {

  },
};

export const Example: Story = {
  render: ({...args}) => ({
    props: args,
    template: `
      <pal-top-page-template ${argsToTemplate(args)}>
        <pal-paint-registration-page-template [input]="paintRegistrationPageInput"/>
      </pal-top-page-template>
    `
  }),
  args: {
    paintRegistrationPageInput: PaintRegistrationPageTemplateStories.Example.args?.input
  },
};
