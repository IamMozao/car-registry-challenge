import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarManagementComponent {
  areaOptions = ["Add", "Registry"];
  selectedArea: string;
  startingFilter: number;

  constructor(private cd: ChangeDetectorRef) {
    this.selectedArea = "Add";
   }

  findFreshCar(freshCarLicense: number): void {
    this.startingFilter = freshCarLicense;
    this.changeArea("Registry");
  }

  changeArea(area: string) {    
    this.selectedArea = area;    
    this.cd.detectChanges();
  }

}
