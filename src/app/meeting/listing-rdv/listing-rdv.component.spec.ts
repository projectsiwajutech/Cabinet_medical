import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingRdvComponent } from './listing-rdv.component';

describe('ListingRdvComponent', () => {
  let component: ListingRdvComponent;
  let fixture: ComponentFixture<ListingRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingRdvComponent]
    });
    fixture = TestBed.createComponent(ListingRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
