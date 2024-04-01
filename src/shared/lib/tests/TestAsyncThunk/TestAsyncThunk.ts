import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => (
    AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>
)
   
jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateShema;
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch, 
            this.getState, 
            { api: this.api, navigate: this.navigate }
        );

        return result;
    }
}