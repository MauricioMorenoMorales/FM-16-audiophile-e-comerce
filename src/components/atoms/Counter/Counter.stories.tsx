import { Meta, Story } from '@storybook/react';
import Counter from './Counter';

export default {
	component: Counter,
	title: 'Atoms/Counter',
} as Meta;

const Template: Story = args => <Counter {...args} />;

export const defaultCounter = Template.bind({});
