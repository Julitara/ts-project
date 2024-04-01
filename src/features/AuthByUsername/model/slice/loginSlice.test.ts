import { LoginShema } from '../types/loginShema';
import { loginActions, loginReducer } from './loginSlice';


describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginShema> = {username: 'admin'};

        expect(loginReducer(
            state as LoginShema, 
            loginActions.setUsername('new name'))).toEqual({username: 'new name'}
        );
    });

    test('test set password', () => {
        const state: DeepPartial<LoginShema> = {password: '123'};

        expect(loginReducer(
            state as LoginShema, 
            loginActions.setPassword('1234'))).toEqual({password: '1234'}
        );
    });
});