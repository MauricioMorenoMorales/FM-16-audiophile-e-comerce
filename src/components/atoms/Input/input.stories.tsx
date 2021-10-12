import { Meta, Story } from '@storybook/react';
import Input, { ComponentProps as InputProps } from './Input';

export default {
	component: Input,
	title: 'Atoms/Input',
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const InputWithoutTitle = Template.bind({});
InputWithoutTitle.args = {
	placeholder: 'This is a placeholder',
};
export const normalInput = Template.bind({});
normalInput.args = {
	title: 'Name',
	placeholder: 'Introduce your name',
};
export const passwordInput = Template.bind({});
passwordInput.args = {
	placeholder: 'Introduce your password',
	title: 'Password',
	type: 'password',
};
export const emailInput = Template.bind({});
emailInput.args = {
	placeholder: 'Introduce your email',
	title: 'Email',
	type: 'email',
};
