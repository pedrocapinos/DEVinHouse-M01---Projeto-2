import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formValid = false;

  public formularioLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  public logar() {
    if (this.formularioLogin.valid) {
      this.router.navigate(['/app/home']);
      // console.log(this.formularioLogin.value)
    }
    else {
      alert('E-mail ou senha inválidos.')
    }
  }

  ngOnInit(): void {
  }

}
