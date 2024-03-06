import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingConsultationComponent } from './listing-consultation.component';

describe('ListingConsultationComponent', () => {
  let component: ListingConsultationComponent;
  let fixture: ComponentFixture<ListingConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingConsultationComponent]
    });
    fixture = TestBed.createComponent(ListingConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
