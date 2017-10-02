import { Component } from '@angular/core';
import { NavController,NavParams,IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  term:string = '';
  dosageName:any;
  selectedDosage:string;

  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.dosageName = navParams.get('dosageLists');
    this.selectedDosage = navParams.get('dosageItemName');
  }

  searchFn(ev: any) {
    this.term = ev.target.value;
  }


}
