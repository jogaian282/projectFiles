import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  template:'<ion-nav #myNav [root]="rootPage"></ion-nav>'
})

export class MyApp {

  @ViewChild(Nav) nav;

  constructor(@Inject(Platform) platform,statusBar: StatusBar,splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      },100);
    });
  }
  rootPage:string = 'WelcomePage';

}
