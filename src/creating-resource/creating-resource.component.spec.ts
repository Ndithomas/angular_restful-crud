import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingResourceComponent } from './creating-resource.component';

describe('CreatingResourceComponent', () => {
  let component: CreatingResourceComponent;
  let fixture: ComponentFixture<CreatingResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
