import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChatboxComponent } from './input-chatbox.component';

describe('InputChatboxComponent', () => {
  let component: InputChatboxComponent;
  let fixture: ComponentFixture<InputChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
