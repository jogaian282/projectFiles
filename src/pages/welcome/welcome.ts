import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { CodePush , SyncStatus, InstallMode } from '@ionic-native/code-push';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage   {

	private appCurrentVersion;

	constructor(public navCtrl: NavController, public navParams: NavParams,private codePush: CodePush,private dialogs: Dialogs,public alertCtrl:AlertController,public platform:Platform) {
		this.platform.ready().then(() =>{
			this.codePush.getCurrentPackage().then(data => {
				this.appCurrentVersion = data.appVersion;
			})
			.catch(e => console.log('Error displaying dialog', e));
			this.codePush.notifyApplicationReady();
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WelcomePage');
		this.codePush.checkForUpdate().then((data)=>{
			if(!data){
				console.log("App is UP-TO-DATE");
			}
			else{
				this.codePush.sync({installMode: InstallMode.ON_NEXT_RESUME});
			}
		})
	}

	showAlertMessage(event){
		const alert = this.alertCtrl.create({
            title: 'About Antibiotic Policy',
            message: `
				Current App Version is ` + " " + this.appCurrentVersion + `<br>
				<br>
				<span> Developed by </span> <br>
				<br>
				<strong> Raster Images Pvt Ltd </strong>
				`
            ,
			buttons: [
				{
					text : 'CHECK UPDATE',
					handler : () => {
						this.update();
					}
				}
			]
          });
		alert.present();
	}

	update(){
		this.platform.ready().then(
			() => {
				this.codePush.sync({updateDialog: true,installMode: InstallMode.ON_NEXT_RESUME}).subscribe((status) => {
					if(status == SyncStatus.CHECKING_FOR_UPDATE)
						this.dialogs.alert("Checking for update");
					if(status == SyncStatus.DOWNLOADING_PACKAGE)
						this.dialogs.alert("Downloading Package");
					if(status == SyncStatus.IN_PROGRESS)
						this.dialogs.alert("In Progress");
					if(status == SyncStatus.INSTALLING_UPDATE)
						this.dialogs.alert("Installing Update");
					if(status == SyncStatus.UP_TO_DATE)
						this.dialogs.alert("Up to Date");
					if(status == SyncStatus.UPDATE_INSTALLED){
						this.dialogs.alert("Update Installed");
						if(SyncStatus.UPDATE_INSTALLED){
							this.codePush.restartApplication();
						}
					}
					if(status == SyncStatus.ERROR)
						this.dialogs.alert("Error -> Check Internet Connection");
				})
			}
		)
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
