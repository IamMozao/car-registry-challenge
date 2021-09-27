import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarManagementComponent } from './car-management.component';
import { By } from '@angular/platform-browser';


describe('CarManagementComponent', () => {
  let component: CarManagementComponent;
  let fixture: ComponentFixture<CarManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarManagementComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Add Car panel visible', () => {
    expect(component.selectedArea).toEqual("Add");
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#add-car'))).not.toEqual(null);
    expect(fixture.debugElement.query(By.css('#car-registry'))).toEqual(null);
  })

  it('should have the Car Registry panel visible', () => {
    component.selectedArea = "Registry";
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#car-registry'))).not.toEqual(null);
    expect(fixture.debugElement.query(By.css('#add-car'))).toEqual(null);
  })
});
