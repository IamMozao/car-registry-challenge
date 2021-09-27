import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarRegistryComponent } from './components/car-registry/car-registry.component';
import { CarManagementComponent } from './pages/car-management/car-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar-component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AddCarComponent,
    CarRegistryComponent,
    CarManagementComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    SharedModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class PublicModule { }
