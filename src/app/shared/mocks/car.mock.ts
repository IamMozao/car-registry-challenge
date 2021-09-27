import { Car, CarType } from "@shared/types/car.types";

export const ValidCarMock: Car = {
    carType: CarType.car,
    model: "BMW",
    color: "Red",
    license: 1,
    owner: 'Murilo'
}

export const InvalidCarMock = {
    model: "BMW",
    license: '0000',
    owner: 'Murilo'
}

export const ValidTruckMock: Car = {
    carType: CarType.truck,
    model: "Mercedes Benz",
    color: "White",
    license: 2,
    owner: 'Murilo',
    capacity: 600
}

export const InvalidTruckMock = {
    carType: CarType.truck,
    model: "Mercedes Benz",
    owner: 'Murilo',
    capacity: '600'
}

export const ValidCarList = [
    ValidCarMock,
    ValidTruckMock
]