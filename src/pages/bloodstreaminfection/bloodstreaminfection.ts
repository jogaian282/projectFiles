import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bloodstreaminfection',
  templateUrl: 'bloodstreaminfection.html',
})

export class BloodstreaminfectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodstreaminfectionPage');
  }

}
