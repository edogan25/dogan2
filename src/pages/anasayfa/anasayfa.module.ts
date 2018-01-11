import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnasayfaPage } from './anasayfa';

@NgModule({
  declarations: [
    AnasayfaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnasayfaPage),
  ],
})
export class AnasayfaPageModule {}
