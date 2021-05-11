import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartInfComponent } from './show-cart-inf.component';

describe('ShowCartInfComponent', () => {
  let component: ShowCartInfComponent;
  let fixture: ComponentFixture<ShowCartInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCartInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCartInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
