import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage   {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WelcomePage');
	}

	goToOtherPage() {
		this.navCtrl.push('OpdPolicyPage');
	}

	riskfactor(){
		this.navCtrl.push('RiskFactorsPage');
	}

	patientrisk(){
		this.navCtrl.push('PatientRiskPage');
	}

	opdward(){
		this.navCtrl.push('OpdvardPage');
	}

	ward(){
		this.navCtrl.push('GuidecontentPage');
	}

	note(){
		this.navCtrl.push('NotePage');
	}

	disclaimer(){
		this.navCtrl.push('DisclaimerPage');
	}

	dosage(){
		this.navCtrl.push('DosageListsPage');
	}

}
