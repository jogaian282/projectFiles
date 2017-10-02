import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-urinarytract-infec-table',
  templateUrl: 'urinarytract-infec-table.html',
})

export class UrinarytractInfecTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrinarytractInfecTablePage');
  }


}
