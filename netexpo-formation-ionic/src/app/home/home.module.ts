import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, FooterComponent, LoginComponent, MenuComponent, HelpComponent, BodyComponent]

})
export class HomePageModule {}
