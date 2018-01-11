import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { YeniIhbarPage } from '../pages/yeni-ihbar/yeni-ihbar';
import { IhbarlarPage } from '../pages/ihbarlar/ihbarlar';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { GirisPage } from '../pages/giris/giris';
import { KayitPage } from '../pages/kayit/kayit';
import { SifremiunuttumPage } from '../pages/sifremiunuttum/sifremiunuttum';
import { Sifremiunuttum2Page } from '../pages/sifremiunuttum2/sifremiunuttum2';
import { SifredegistirPage } from '../pages/sifredegistir/sifredegistir';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    YeniIhbarPage,
    IhbarlarPage,
    AnasayfaPage,
    GirisPage,
    ProfilPage,
    KayitPage,
    SifremiunuttumPage,
    Sifremiunuttum2Page,
    SifredegistirPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YeniIhbarPage,
    IhbarlarPage,
    AnasayfaPage,
    GirisPage,
    ProfilPage,
    KayitPage,
    SifremiunuttumPage,
    Sifremiunuttum2Page,
    SifredegistirPage ,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
