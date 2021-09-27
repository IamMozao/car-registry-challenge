export interface Car {
    carType: CarType;
    model: string;
    color: string;
    license: number;
    owner: string;
    capacity?: number;
}

export enum CarType {
    car = 'Car',
    truck = 'Truck'
}