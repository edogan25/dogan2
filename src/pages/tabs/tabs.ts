import { Component } from '@angular/core';

import { YeniIhbarPage } from '../yeni-ihbar/yeni-ihbar';
import { IhbarlarPage } from '../ihbarlar/ihbarlar';
import { AnasayfaPage } from '../anasayfa/anasayfa';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AnasayfaPage;
  tab2Root = YeniIhbarPage;
  tab3Root = IhbarlarPage;
  tab4Root= ProfilPage;
  constructor() {

  }
}
