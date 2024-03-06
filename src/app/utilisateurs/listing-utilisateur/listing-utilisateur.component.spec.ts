import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingUtilisateurComponent } from './listing-utilisateur.component';

describe('ListingUtilisateurComponent', () => {
  let component: ListingUtilisateurComponent;
  let fixture: ComponentFixture<ListingUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingUtilisateurComponent]
    });
    fixture = TestBed.createComponent(ListingUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
