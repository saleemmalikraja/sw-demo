import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogdetailComponent } from './edit-blogdetail.component';

describe('EditBlogdetailComponent', () => {
  let component: EditBlogdetailComponent;
  let fixture: ComponentFixture<EditBlogdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
