import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementaryFiltersComponent } from './complementary-filters.component';

describe('ComplementaryFiltersComponent', () => {
  let component: ComplementaryFiltersComponent;
  let fixture: ComponentFixture<ComplementaryFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementaryFiltersComponent]
    });
    fixture = TestBed.createComponent(ComplementaryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
