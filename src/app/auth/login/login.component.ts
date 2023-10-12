import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  edit = false;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [],
      password: []
    })
  }

  login() {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    } else {
      this.submitted = false;
      this.router.navigate(['/employee/list'])
    }
  }
}
