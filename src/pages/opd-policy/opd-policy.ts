import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opd-policy',
  templateUrl: 'opd-policy.html',
})

export class OpdPolicyPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdPolicyPage');
  }

}
