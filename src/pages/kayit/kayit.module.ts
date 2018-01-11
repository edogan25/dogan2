import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KayitPage } from './kayit';

@NgModule({
  declarations: [
    KayitPage,
  ],
  imports: [
    IonicPageModule.forChild(KayitPage),
  ],
})
export class KayitPageModule {}
