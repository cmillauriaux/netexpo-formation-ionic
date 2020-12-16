import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Input() message: string;
  
  @Output() logged = new EventEmitter<boolean>();

  nom: string = "Arthur";



  ngOnInit() {}

  redirect(){
    alert('Bye Bye')
    window.location.replace("https://lavomasque.fr/");
  }

  call(){
    window.open('tel:900300400');
  }

  isLog(userIsLogged) {
    if (userIsLogged) {
      this.nom = this.makeid(25);
    } else {
      this.nom = "DISCONNECTED";
    }
  }

  
  isLogout(userIsLogged) {
    if (userIsLogged) {
      this.nom = this.makeid(25);
    } else {
      this.nom = "Connected";
    }
  }

  login() {
    this.logged.emit(true);
  }

  logout() {
    this.logged.emit(false);
  }



  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
