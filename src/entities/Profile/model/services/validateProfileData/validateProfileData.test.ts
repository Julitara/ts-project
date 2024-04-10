import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.USA,
    firstname: 'Julia',
    lastname: 'Tarasova',
    city: 'New York',
    currency: Currency.USD
};

describe('validateProfileData.test', () => {

    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfileData({...data, firstname: '', lastname: ''});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({...data, country: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });

});