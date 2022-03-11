import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementItemComponent } from './advertisement-item.component';

describe('AdvertisementItemComponent', () => {
  let component: AdvertisementItemComponent;
  let fixture: ComponentFixture<AdvertisementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
