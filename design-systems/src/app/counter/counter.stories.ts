import {CounterComponent} from './counter.component';
import { Story } from '@storybook/angular';

const Template: Story<CounterComponent> = (args) => ({
  props: args
});

export default {
  title: 'Components/Counter',
  component: CounterComponent
};

export const DefaultCounter = Template.bind({});

DefaultCounter.args = {};