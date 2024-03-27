import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { ReducerManager, StateShema, StateShemaKey } from './StateShema';

export function createReducerManager(initialReducers: ReducersMapObject<StateShema>): 
ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);
  
    let keysToRemove: Array<StateShemaKey> = [];
  
    return {
        getReducerMap: () => reducers,
        reduce: (state: StateShema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
  
            return combinedReducer(state, action);
        },
  
        add: (key: StateShemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
  
            reducers[key] = reducer;
  
            combinedReducer = combineReducers(reducers);
        },
  
        remove: (key: StateShemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
  
            delete reducers[key];
  
            keysToRemove.push(key);
  
            combinedReducer = combineReducers(reducers);
        }
    };
}