import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component(
  {selector: 'page-patient-risk', templateUrl: 'patient-risk.html'}
)

export class PatientRiskPage {

  page1 : any = 'Patienttype1Page';
  page2 : any = 'Patienttype2Page';
  page3 : any = 'Patienttype3Page';

  constructor(public navCtrl : NavController, public navParams : NavParams,public alertCtrl: AlertController) {}

  onTabSelect(ev: any){
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

  showAlertMessage(){
    let alert = this.alertCtrl.create({
      title: 'Reference',
      message: 'National policy for containment of Antimicrobial Resistance India 2011.',
      buttons: [{
        text: 'Close'
      }]
    });
    alert.present();
  }

}
