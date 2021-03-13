import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWorkComponent } from './item-work.component';

describe('ItemWorkComponent', () => {
  let component: ItemWorkComponent;
  let fixture: ComponentFixture<ItemWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
