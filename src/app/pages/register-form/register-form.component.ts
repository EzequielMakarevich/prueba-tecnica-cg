import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
//nombre, apellido, dni, mail y teléfono
export class RegisterFormComponent implements OnInit {
  registerForm = new FormBuilder().group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    dni: ['', Validators.required],
    tel: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]		
	});

  matcher = new MyErrorStateMatcher();

  
  constructor() { }

  ngOnInit(): void {
  }

  get name() {
    return this.registerForm.get('name')
  }

  get lastName() {
    return this.registerForm.get('lastName')
  }

  get dni() {
    return this.registerForm.get('dni')
  }

  get tel() {
    return this.registerForm.get('tel')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }
  

  sendForm(){
    if (this.registerForm.valid){
      localStorage.setItem('registerData', JSON.stringify(this.registerForm.value))      
    }
  }

}
