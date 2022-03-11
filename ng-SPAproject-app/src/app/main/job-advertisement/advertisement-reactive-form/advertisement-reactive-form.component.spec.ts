import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementReactiveFormComponent } from './advertisement-reactive-form.component';

describe('AdvertisementReactiveFormComponent', () => {
  let component: AdvertisementReactiveFormComponent;
  let fixture: ComponentFixture<AdvertisementReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
