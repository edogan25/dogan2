import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnasayfaPage } from '../anasayfa/anasayfa';

/**
 * Generated class for the KayitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kayit',
  templateUrl: 'kayit.html',
})
export class KayitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tabb(){
    let elements = document.querySelectorAll(".tabbar");
   if (elements != null) {
       Object.keys(elements).map((key) => {
           elements[key].style.display = 'flex';
       });
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KayitPage');
    let elements = document.querySelectorAll(".tabbar");

   if (elements != null) {
       Object.keys(elements).map((key) => {
           elements[key].style.display = 'none';
       });
   }
  }

  ionViewDidLeave() {
    this.navCtrl.popToRoot();
      }

}
