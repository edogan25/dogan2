import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YeniIhbarPage } from './yeni-ihbar';

@NgModule({
  declarations: [
    YeniIhbarPage,
  ],
  imports: [
    IonicPageModule.forChild(YeniIhbarPage),
  ],
})
export class YeniIhbarPageModule {}
