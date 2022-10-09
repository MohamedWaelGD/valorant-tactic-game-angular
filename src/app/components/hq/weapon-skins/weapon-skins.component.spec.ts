import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSkinsComponent } from './weapon-skins.component';

describe('WeaponSkinsComponent', () => {
  let component: WeaponSkinsComponent;
  let fixture: ComponentFixture<WeaponSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponSkinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
