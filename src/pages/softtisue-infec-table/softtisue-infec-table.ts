import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-softtisue-infec-table',
  templateUrl: 'softtisue-infec-table.html',
})
export class SofttisueInfecTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SofttisueInfecTablePage');
  }


}
