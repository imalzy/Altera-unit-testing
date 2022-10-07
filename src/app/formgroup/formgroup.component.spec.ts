import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormgroupComponent } from './formgroup.component';

describe('FormgroupComponent', () => {
  let component: FormgroupComponent;
  let fixture: ComponentFixture<FormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgroupComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cek apakah user detail form invalid', ()=>{
    component.userDetailForm.setValue({
      nama: '',
      phone: '',
      email: '',
    })

    expect(component.userDetailForm.valid).toEqual(false);
  })

  it('cek apakah user detail form valid', ()=>{
    component.userDetailForm.setValue({
      nama: 'Imal',
      phone: '081231312',
      email: 'test@gmail.com',
    })

    expect(component.userDetailForm.valid).toEqual(true);
  })

  it('cek apakah email user detail is invalid', ()=>{
    component.userDetailForm.get('email')?.setValue('sdfsafadf');

    expect(component.userDetailForm.get('email')?.valid).toEqual(false)
  })

  it('cek apakah email user detail is valid', ()=>{
    component.userDetailForm.get('email')?.setValue('imal@example.com');

    expect(component.userDetailForm.get('email')?.valid).toEqual(true);
  })
});
