import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: Profile = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.USA,
    firstname: 'admin',
    lastname: 'admin',
    city: 'New York',
    currency: Currency.USD
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1'},
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};


describe('features/EditableProfileCard', () => {

    test('toggle readonly', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('click cancel - return previos values', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        //fill input
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
    });

    test('expect error', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('succsess', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
 
});