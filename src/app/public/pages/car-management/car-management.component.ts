import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Car } from '@shared/types/car.types';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss']
})
export class CarManagementComponent {
  areaOptions = ["Add", "Registry"];
  selectedArea = "Add";
  startingFilter: number;

  constructor(private cd: ChangeDetectorRef) { }

  findFreshCar(freshCarLicense: number): void {
    this.changeArea("Registry");
    this.startingFilter = freshCarLicense;
  }

  changeArea(area) {
    this.selectedArea = area;
    this.cd.detectChanges();
  }

}
