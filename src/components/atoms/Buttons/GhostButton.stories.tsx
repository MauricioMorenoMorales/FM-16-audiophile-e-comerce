import { Meta, Story } from '@storybook/react';
import GhostButton from './GhostButton';

export default {
	component: GhostButton,
	title: 'Atoms/GhostButton',
} as Meta;

const Template: Story = args => (
	<GhostButton {...args}>Go to store</GhostButton>
);

export const Primary = Template.bind({});
