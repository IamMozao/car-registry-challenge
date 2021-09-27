import { createAction, props } from '@ngrx/store';
import { Car } from '@shared/types/car.types';

export enum CarActionTypes {
    request = '[CAR] Add Car'
}

export const AddCarType = '[CAR] Add Car'

export const addCar = createAction(CarActionTypes.request, props<{ car: Car }>());
