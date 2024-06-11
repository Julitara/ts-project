import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', function() {
    
    test('get with one param', () => {
        const params = getQueryParams({
            test: 'value'
        }); 
        expect(params).toBe('?test=value');
    });

    test('get with multiple param', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2'
        }); 
        expect(params).toBe('?test=value&second=2');
    });

    test('get with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined
        }); 
        expect(params).toBe('?test=value');
    });
});