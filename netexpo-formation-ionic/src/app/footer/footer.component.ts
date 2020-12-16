import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() message: string;
  @Output() logged = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {}

  login() {
    this.logged.emit(true);
  }

  logout() {
    this.logged.emit(false)
  }

}
