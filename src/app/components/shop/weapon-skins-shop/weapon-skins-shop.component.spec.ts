import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSkinsShopComponent } from './weapon-skins-shop.component';

describe('WeaponSkinsShopComponent', () => {
  let component: WeaponSkinsShopComponent;
  let fixture: ComponentFixture<WeaponSkinsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponSkinsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponSkinsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
