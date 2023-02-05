import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsMoreComponent } from './whats-more.component';

describe('WhatsMoreComponent', () => {
  let component: WhatsMoreComponent;
  let fixture: ComponentFixture<WhatsMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
