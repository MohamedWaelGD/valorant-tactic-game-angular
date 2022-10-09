import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsShopComponent } from './weapons-shop.component';

describe('WeaponsShopComponent', () => {
  let component: WeaponsShopComponent;
  let fixture: ComponentFixture<WeaponsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
