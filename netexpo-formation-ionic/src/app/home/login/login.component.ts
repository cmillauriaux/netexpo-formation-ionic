import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input() message: string;
  @Output() logged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  login() {
    this.logged.emit(true);

  }
  logout(){
    this.logged.emit(false);
  }
}
