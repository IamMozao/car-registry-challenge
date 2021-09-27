import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '../store.types';
import { carReducer } from './car/car.reducer';

export const reducers: ActionReducerMap<AppState> = {
  cars: carReducer,
};

function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: ['cars'],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState, any>> = [localStorageSyncReducer];
