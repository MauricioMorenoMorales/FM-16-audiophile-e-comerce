import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
	component: Button,
	title: 'Atoms/Button',
} as Meta;

const Template: Story<ButtonProps> = args => (
	<Button {...args}>see product</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	kind: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
	kind: 'secondary',
};
export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
	kind: 'primary',
	fullWidth: true,
};
