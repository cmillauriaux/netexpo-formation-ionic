import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Input() key1: string;
  @Input() key2: string;
  @Input() key3: string;

  constructor(private menu: MenuController) {

    setInterval(() => {
      this.key1 = this.makeid(15);
      this.key2 = this.makeid(15);
      this.key3 = this.makeid(15);
    }, 50);

   

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

  ngOnInit() {}

  redirect(){
    alert('Bye Bye')
    window.location.replace("https://lavomasque.fr/");
  }

  call(){
    window.open('tel:900300400');
  }

}
