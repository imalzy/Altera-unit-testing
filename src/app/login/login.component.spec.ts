import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let btnEl: DebugElement;
  // let emailEl: DebugElement;
  // let passwordEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // emailEl = fixture.debugElement.query(By.css('input[type=email]'));
    // passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    // btnEl = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Update setting untuk tombil login menjadi false', ()=>{
  //   component.isEnabled = false; // true
  //   fixture.detectChanges()
  //   expect(btnEl.nativeElement.disabled).toBeTruthy();
  // })


  // it('Update setting untuk tombil login menjadi true', ()=>{
  //   component.isEnabled = true; // false
  //   fixture.detectChanges()
  //   expect(btnEl.nativeElement.disabled).toBeFalsy();
  // })

  // it('input email dan password lalu emit login event', ()=>{
  //   let user:any;
  //   emailEl.nativeElement.value = "halo@gmail.com";
  //   passwordEl.nativeElement.value = "admin123";

  //   component.loggedIn.subscribe(item=> user = item);

  //   btnEl.triggerEventHandler('click', null);

  //   expect(user.email).toBe('halo@gmail.com');
  //   expect(user.password).toBe('admin123');
  // })

  it('form invalid ketika kosong', ()=>{
    expect(component.form.valid).toBeFalsy()
  })

  it('form valid', ()=>{
    component.form.setValue({
      email: 'Imal@gmail.com',
      password: '081231312',
    })
    expect(component.form.valid).toBeTruthy()
  })

  it('password valid panjang minimal 5', ()=>{
    component.form.setValue({
      email: 'Imal@gmail.com',
      password: '12345',
    });
    const pass = component.form.controls.password;

    expect(pass.valid).toBeTruthy();
  })

  it('password invalid panjang minimal 5', ()=>{
    component.form.setValue({
      email: 'Imal@gmail.com',
      password: '123',
    });
    const pass = component.form.controls.password;

    expect(pass.valid).toBeFalsy();
  })
});
