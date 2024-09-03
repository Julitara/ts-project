import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.USA,
            firstname: 'Julia',
            lastname: 'Tarasova',
            city: 'New York',
            currency: Currency.USD,
        }
    }
})];

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.USA,
            firstname: 'Julia',
            lastname: 'Tarasova',
            city: 'New York',
            currency: Currency.USD,
        }
    }
})];