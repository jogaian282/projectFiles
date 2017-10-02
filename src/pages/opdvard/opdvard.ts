import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opdvard',
  templateUrl: 'opdvard.html',
})

export class OpdvardPage {

  page1 : any = 'ResInfecTablePage';
  page2 : any = 'SofttisueInfecTablePage';
  page3 : any = 'UrinarytractInfecTablePage';
  page4 : any = 'BloodstreaminfectionPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdvardPage');
  }

  onTabSelect(ev: any){
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
