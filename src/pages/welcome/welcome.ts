import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,Platform} from 'ionic-angular';
import { CodePush } from '@ionic-native/code-push';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage   {

	constructor(public navCtrl: NavController, public navParams: NavParams,private codePush: CodePush,public popoverCtrl: PopoverController,public platform:Platform) {
		this.platform.ready().then(() =>{
			this.codePush.notifyApplicationReady();
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WelcomePage');
	}

	public presentPopover(event: Event) {
		let popover = this.popoverCtrl.create('SettingsPage');
		popover.present({ ev: event });
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
