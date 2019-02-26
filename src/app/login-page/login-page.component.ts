import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public isShowingPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.loginForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [this.customRequired, Validators.email]],
      password: ['', [this.customRequired, Validators.minLength(6)]]
    });
  }

  private customRequired(formControl: FormControl): any {
    if (!formControl.dirty) {
      return null;
    }
    return 1;
  }

  public formIsPopulated(): boolean {
    return this.loginForm.controls.email.value.length > 0 && this.loginForm.controls.password.value.length > 0;
  }

  public setShowingPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
}
