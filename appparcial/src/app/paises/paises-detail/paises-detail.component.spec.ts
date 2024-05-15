import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDetailComponent } from './paises-detail.component';

describe('PaisesDetailComponent', () => {
  let component: PaisesDetailComponent;
  let fixture: ComponentFixture<PaisesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
