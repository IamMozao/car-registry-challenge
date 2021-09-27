import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { InvalidCarMock, InvalidTruckMock, ValidCarMock, ValidTruckMock } from '@shared/mocks/car.mock';
import { addCar } from '@store/actions/car/car.actions';
import { initialState } from '@store/reducers/car/car.reducer';
import { AppState } from '@store/store.types';
import { AddCarComponent } from './add-car.component';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;
  let mockStore: MockStore<AppState>;

  class StoreMock {
    select = jasmine.createSpy('select');
    dispatch = jasmine.createSpy('dispatch');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, BrowserAnimationsModule],
      declarations: [AddCarComponent],
      providers: [
        FormBuilder,
        provideMockStore({ initialState: initialState }),
        {
          provide: MockStore,
          useClass: StoreMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as MockStore<AppState>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Add new Car", () => {

    function updateForm(carData) {
      component.carForm.controls['carType'].setValue(carData.carType);
      component.carForm.controls['model'].setValue(carData.model);
      component.carForm.controls['color'].setValue(carData.color);
      component.carForm.controls['license'].setValue(carData.license);
      component.carForm.controls['owner'].setValue(carData.owner);
    }

    it('should populate the form with correct values', fakeAsync(() => {
      updateForm(ValidCarMock);
      expect(component.carForm.value).toEqual(ValidCarMock);
    }));
    it('should be false when form is invalid', fakeAsync(() => {
      updateForm(InvalidCarMock);
      expect(component.carForm.valid).toBeFalsy();
    }));

    it('should dispatch the action to add new car', () => {
      updateForm(ValidCarMock);
      component.onSubmit();
      expect(mockStore.dispatch).toHaveBeenCalledWith(addCar({ car: ValidCarMock }));
    });

  })

  describe("Add new Truck", () => {

    function updateForm(carData) {
      component.carForm.controls['carType'].setValue(carData.carType);
      component.carForm.controls['model'].setValue(carData.model);
      component.carForm.controls['color'].setValue(carData.color);
      component.carForm.controls['license'].setValue(carData.license);
      component.carForm.controls['owner'].setValue(carData.owner);
      component.carForm.controls['capacity'].setValue(carData.capacity);
    }

    it('should not have the capacity control', fakeAsync(() => {
      const containsCapacity = component.carForm.contains('capacity');
      expect(containsCapacity).toBeFalsy();
    }));

    it('should add the capacity control', fakeAsync(() => {
      component.carForm.controls['carType'].setValue("Truck");

      const containsCapacity = component.carForm.contains('capacity');
      expect(containsCapacity).toBeTruthy();
    }));

    it('should remove the capacity control when carType is switched to "car"', fakeAsync(() => {
      component.carForm.controls['carType'].setValue("Truck");
      expect(component.carForm.contains('capacity')).toBeTruthy();

      component.carForm.controls['carType'].setValue("Car");
      expect(component.carForm.contains('capacity')).toBeFalsy();

    }));

    it('should populate the form with correct values', fakeAsync(() => {
      updateForm(ValidTruckMock);
      expect(component.carForm.value).toEqual(ValidTruckMock);
    }));
    it('should be false when form is invalid', fakeAsync(() => {
      updateForm(InvalidTruckMock);
      expect(component.carForm.valid).toBeFalsy();
    }));

    it('should dispatch the action to add new truck', () => {
      updateForm(ValidTruckMock);
      component.onSubmit();
      expect(mockStore.dispatch).toHaveBeenCalledWith(addCar({ car: ValidTruckMock }));
    });

  })


});
