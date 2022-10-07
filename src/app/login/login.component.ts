import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // @Output() loggedIn = new EventEmitter<{email:string, password:string}>();
  // @Input() isEnabled: boolean = true;
  // constructor() {}

  // ngOnInit(): void {}

  // login(email: any, password: any) {
  //   if (email && password) {
  //     this.loggedIn.emit({email, password});
  //   }
  // }
  form!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
}
