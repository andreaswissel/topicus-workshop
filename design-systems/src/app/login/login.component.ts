import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputType } from '../input/input.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  InputType = InputType;

  @Output() loginAttempted = new EventEmitter<void>();
  @Output() loginResult = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.loginAttempted.emit();
    this.loginService.login(username, password).subscribe((result) => {
      this.loginResult.emit(result);
      console.log(result);
    });
  }
}
