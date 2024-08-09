import { StateSchema } from 'app/providers/StoreProvider';
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData
            }
        };        
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});