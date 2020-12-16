import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {

  @Input() message: string;
  @Output() logged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  login() {
    this.logged.emit(true);
  }

}
