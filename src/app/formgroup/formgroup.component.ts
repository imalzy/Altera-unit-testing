import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {
  userDetailForm: FormGroup = new FormGroup({
    nama: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
