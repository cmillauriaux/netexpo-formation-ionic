import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {

  @Input() message: string;
  @Output() logged = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {}

  login() {
    this.logged.emit(true);
  }
  logout() {
    this.logged.emit(false);
  }

}
