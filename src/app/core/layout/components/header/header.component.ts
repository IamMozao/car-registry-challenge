import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <mat-toolbar color="primary">
      <div class="title">
        <mat-icon>directions_car</mat-icon>
        <span>Car Registry Challenge</span>
      </div>
    </mat-toolbar>
  </header>`,
  styles: [`
    .mat-toolbar {
      display: flex;
      justify-content: space-between;
    
      .mat-icon {
        margin-right: .5rem;
      }
    }
    .title {
      display: flex;
      align-items: center;
    
    }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
