import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  redirect(){
    alert('Bye Bye')
    window.location.replace("https://lavomasque.fr/");
  }

  call(){
    window.open('tel:900300400');
  }

}
