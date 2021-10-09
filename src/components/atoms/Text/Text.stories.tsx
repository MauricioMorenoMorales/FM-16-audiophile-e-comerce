import { Meta, Story } from '@storybook/react';
import Text, { textProps } from './Text';

export default {
	component: Text,
	title: 'Atoms/Text',
} as Meta;

const Default: Story<textProps> = args => <Text {...args}>Lorem Ipsum</Text>;

export const H1 = Default.bind({});
H1.args = {
	size: 'h1',
};
export const H2 = Default.bind({});
H2.args = {
	size: 'h2',
};
export const H2Accent = Default.bind({});
H2Accent.args = {
	size: 'h2',
	color: 'accent',
};
export const H3 = Default.bind({});
H3.args = {
	size: 'h3',
};
export const H4 = Default.bind({});
H4.args = {
	size: 'h4',
};
export const H5 = Default.bind({});
H5.args = {
	size: 'h5',
};
export const H6 = Default.bind({});
H6.args = {
	size: 'h6',
};
export const subtitle = Default.bind({});
subtitle.args = {
	size: 'subtitle',
	color: 'accent',
};
export const overline = Default.bind({});
overline.args = {
	size: 'overline',
	color: 'accent',
};
export const predetermined = Default.bind({});
predetermined.args = {
	size: 'overline',
};
