import { StateShema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
    test('should return true', () => {
        const data = {
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
                data
            }
        };        
        expect(getProfileData(state as StateShema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileData(state as StateShema)).toEqual(undefined);
    });
});