import { StateShema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from '../getProfileData/getProfileData';

describe('getProfoleData.test', () => {
    test('should return true', () => {
        const formData = {
            username: 'admin',
            age: 22,
            country: Country.USA,
            firstname: 'Julia',
            lastname: 'Tarasova',
            city: 'New York',
            currency: Currency.USD
        };
        const state: DeepPartial<StateShema> = {
            profile: {
                form: formData
            }
        };        
        expect(getProfileForm(state as StateShema)).toEqual(formData);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileForm(state as StateShema)).toEqual(undefined);
    });
});