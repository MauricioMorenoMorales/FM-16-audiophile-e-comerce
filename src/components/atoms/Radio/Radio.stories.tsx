import { Meta, Story } from '@storybook/react';
import Radio, { RadioProps } from './Radio';

export default {
	component: Radio,
	title: 'Atoms/Radio',
} as Meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

export const Active = Template.bind({});
Active.args = {
	active: true,
	label: 'This is an active Radio',
};

export const Default = Template.bind({});
Default.args = {
	active: false,
	label: 'This is a default Radio',
};
