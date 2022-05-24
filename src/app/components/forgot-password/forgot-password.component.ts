import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formValid = false;

  public formularioRedefinir: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public redefinirSenha() {
    if (this.formularioRedefinir.valid) {
      alert('Verifique seu e-mail com as instruções para redefinir senha!');
      this.formularioRedefinir.reset();
      // console.log(this.formularioRedefinir.value);
    }
    else {
      alert('E-mail inválido.')
    }
  }

}
