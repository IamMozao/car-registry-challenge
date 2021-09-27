import { createReducer, createSelector, on } from '@ngrx/store';
import { CarState } from './car.reducer.types';
import * as Actions from '../../actions/car/car.actions';
import { AppState } from '@store/store.types';

export const initialState: CarState = {
    carList: []
}

const updateCars = (state: CarState, { car }) => ({
    carList: [...state.carList, car]
})


export const carReducer = createReducer(
    initialState,
    on(Actions.addCar, updateCars)
);

export const getCars = createSelector(
    (state: AppState) => state.cars,
    (state) => state.carList
);
