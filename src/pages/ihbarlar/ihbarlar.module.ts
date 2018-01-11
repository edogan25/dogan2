import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IhbarlarPage } from './ihbarlar';

@NgModule({
  declarations: [
    IhbarlarPage,
  ],
  imports: [
    IonicPageModule.forChild(IhbarlarPage),
  ],
})
export class IhbarlarPageModule {}
