import { moduleMetadata, Story } from '@storybook/angular';
import { FormElementComponent } from '../form-element/form-element.component';
import { FormElementModule } from '../form-element/form-element.module';
import { InputType } from '../input/input.component';
import { DefaultInput } from '../input/input.stories';
import { FormLayoutComponent } from './form-layout.component';
import { FormLayoutModule } from './form-layout.module';

type FormLayoutProps = {
  myControl: string;
  userInput: Partial<FormElementComponent>;
  passwordInput: Partial<FormElementComponent>;
};

const Template: Story<FormLayoutComponent & FormLayoutProps> = (args) => ({
  props: { args },
  template: `
  <app-form-layout [columns]="args.columns" [heading]="args.heading">
    <app-form-element [label]="args.userInput.label"
                      [placeholder]="args.userInput.placeholder"
                      [value]="args.userInput.value"
                      [inputType]="args.userInput.inputType"></app-form-element>
    <app-form-element [label]="args.passwordInput.label"
                      [placeholder]="args.passwordInput.placeholder"
                      [value]="args.passwordInput.value"
                      [inputType]="args.passwordInput.inputType"></app-form-element>
  </app-form-layout>
  `,
});

export default {
  title: 'Components/FormLayout',
  component: FormLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [FormLayoutModule, FormElementModule],
    }),
  ],
};

export const DefaultFormLayout = Template.bind({});

DefaultFormLayout.args = {
  myControl: 'Hello World',
  heading: 'Default Form Layout',
  userInput: {
    ...DefaultInput.args,
    label: 'User',
    placeholder: 'Username',
    inputType: InputType.text,
    value: '',
  },
  passwordInput: {
    ...DefaultInput.args,
    label: 'Password',
    placeholder: 'Password',
    inputType: InputType.password,
    value: '',
  },
  columns: 2,
};
