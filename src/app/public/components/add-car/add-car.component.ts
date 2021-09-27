import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Car, CarType } from 'src/app/shared/types/car.types';
import { addCar } from 'src/app/store/actions/car/car.actions';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar-component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<boolean>();
  carForm: FormGroup;
  availableColors = ['Red', 'White', 'Blue'];
  carTypes = ['Car', 'Truck'];

  @Output() reviewFreshCar = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initReminderForm();
  }

  initReminderForm() {
    let initialValues: Car = {
      carType: null,
      model: null,
      color: null,
      license: null,
      owner: null
    }

    this.carForm = this.fb.group({
      carType: [initialValues.carType, [Validators.required]],
      model: [initialValues.model, [Validators.required]],
      color: [initialValues.color, [Validators.required]],
      license: [initialValues.license, [Validators.required, Validators.pattern("^[0-9]*$")]],
      owner: [initialValues.owner, [Validators.nullValidator]]
    })

    this.carForm.controls['carType'].valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(value => {
        const capacityControl = this.carForm.contains('capacity');

        if (capacityControl && value === CarType.car) {
          this.carForm.removeControl('capacity');
        }
        if (!capacityControl && value === CarType.truck) {
          this.carForm.addControl('capacity', new FormControl(null, Validators.required));
        }
      });
  }

  onSubmit() {
    const values: Car = this.carForm.value;
    this.store.dispatch(addCar({ car: values }));
    this.openSnackBar(`${values.carType} registred succesfully!`)
  }


  openSnackBar(message: string) {
    const configSuccess: MatSnackBarConfig = {
      panelClass: 'style-success',
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    };

    this._snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      ...configSuccess
    }).afterDismissed().subscribe(data => {
      if (data.dismissedByAction) {
        this.reviewFreshCar.emit(this.carForm.value.license)
      }
    })

  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
