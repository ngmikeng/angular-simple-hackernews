import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCommentsComponent } from './modal-comments.component';

describe('ModalCommentsComponent', () => {
  let component: ModalCommentsComponent;
  let fixture: ComponentFixture<ModalCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
