import { ComponentStory, ComponentMeta } from '@storybook/react';
import { [FTName] } from './[FTName]';

export default {
   title: '[TM_DIRECTORY/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/[FTName]',
   component: [FTName],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
