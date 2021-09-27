import { Component, Inject } from "@angular/core";
import {
    MatSnackBar, MatSnackBarConfig,
    MAT_SNACK_BAR_DATA, MatSnackBarRef
} from '@angular/material/snack-bar';

@Component({
    selector: 'snack-bar-component',
    template: `
    <div class="snack-wrapper"> 
        <span>
            {{data}}
        </span>
        <button mat-raised-button
        color="accent"
        (click)="snackBarRef.dismissWithAction()">See on list</button>
    </div>
    `,
    styles: [`
    .snack-wrapper{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    `]
})
export class SnackBarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<SnackBarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
