import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticalConstitutionPage } from './political-constitution.page';

describe('PoliticalConstitutionPage', () => {
  let component: PoliticalConstitutionPage;
  let fixture: ComponentFixture<PoliticalConstitutionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalConstitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
