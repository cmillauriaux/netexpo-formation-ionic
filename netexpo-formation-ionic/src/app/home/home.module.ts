import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HelpComponent, BodyComponent, MenuComponent]
})
export class HomePageModule {}
