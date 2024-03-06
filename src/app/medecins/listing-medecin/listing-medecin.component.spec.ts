import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMedecinComponent } from './listing-medecin.component';

describe('ListingMedecinComponent', () => {
  let component: ListingMedecinComponent;
  let fixture: ComponentFixture<ListingMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingMedecinComponent]
    });
    fixture = TestBed.createComponent(ListingMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
