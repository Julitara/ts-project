import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInvertedTheme = Template.bind({});
ClearInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const OutlineTheme = Template.bind({});
OutlineTheme.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineRedTheme = Template.bind({});
OutlineRedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE_RED,
};

export const OutlineThemeDark = Template.bind({});
OutlineThemeDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const OutlineThemeSizeM = Template.bind({});
OutlineThemeSizeM.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineThemeSizeL = Template.bind({});
OutlineThemeSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineThemeSizeXL = Template.bind({});
OutlineThemeSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
