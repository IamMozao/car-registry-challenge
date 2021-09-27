import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Car } from '@shared/types/car.types';
import { getCars } from '@store/reducers/car/car.reducer';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-car-registry',
  templateUrl: './car-registry.component.html',
  styleUrls: ['./car-registry.component.scss']
})
export class CarRegistryComponent implements OnDestroy {

  // UI Controllers
  viewOptions = [{ name: "Basic", value: 4 }, { name: "Extended", value: 6 }];
  titles = ["Type", "Model", "Color", "Licence Number", "Owner Name", "Capacity"];
  viewQtd = 4;

  // Observables
  carList$: Observable<Car[]> = this.store.select(getCars);
  carListFiltered$: Observable<Car[]>;

  // Subjects
  onDestroy$ = new Subject<boolean>();
  carListFiltered: BehaviorSubject<Car[]>;
  searchFinished$ = new Subject<boolean>();

  //Form Controls
  search = new FormControl("", Validators.nullValidator);
  viewType = new FormControl("Basic", Validators.nullValidator);

  // Paginator
  collectionLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage = 0;

  // Inputs and Outputs
  @Output() changeArea = new EventEmitter();

  @Input()
  private set startingFilter(v: number) {
    if (v) this.search.setValue(v);
  }

  constructor(private store: Store) {

    this.viewType.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value: string) => this.viewQtd = value === "Basic" ? 4 : 6);

    this.search.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .pipe(debounceTime(300))
      .subscribe((value: string) => this.filterCarList(value));

    this.carList$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(data => {
        this.carListFiltered = new BehaviorSubject<Car[]>(data);
        this.collectionLength = data.length;
      })

    this.carListFiltered$ = this.carListFiltered.asObservable();
  }

  filterCarList(value) {
    this.searchFinished$.next(false);

    this.carList$
      .pipe(takeUntil(this.searchFinished$))
      .subscribe(data => {
        let res = data.filter(obj => Object.values(obj).some(val => {
          if (val && typeof val == 'string' && typeof value == 'string') {
            return val.toString().toLowerCase().includes(value.toLowerCase());
          } else if (val && typeof val == 'number' && typeof value == 'number') {
            return val.toString().includes(value.toString());
          }
        }));

        this.carListFiltered.next(res);
        this.searchFinished$.next(true);
        this.currentPage = 0;
        this.collectionLength = res.length;
      })
  }

  clearSearch() {
    this.search.setValue('');
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
  }

  addNewCar() {
    this.changeArea.emit("Add");
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
    this.searchFinished$.complete();
  }

}
