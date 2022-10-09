import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsShopComponent } from './agents-shop.component';

describe('AgentsShopComponent', () => {
  let component: AgentsShopComponent;
  let fixture: ComponentFixture<AgentsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
