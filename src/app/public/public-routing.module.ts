import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarManagementComponent } from './pages/car-management/car-management.component';

const routes: Routes = [
    { path: 'car-management', component: CarManagementComponent },
    { path: '', redirectTo: 'car-management' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PublicRoutingModule {
}
