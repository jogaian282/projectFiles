import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController,ViewController} from 'ionic-angular';
import { CodePush,SyncStatus } from '@ionic-native/code-push';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage   {

    selectedTitle: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private alertCtrl:AlertController,private codePush: CodePush,private platform: Platform) {
        this.selectedTitle = '';
    }

    ionViewDidLoad() {
		console.log('ionViewDidLoad WelcomePage');
    }
    
    // Method to check update
    public chkUpdate(){
        this.platform.ready().then(
            () =>{
                this.codePush.sync({}, (progress) => {

                }).subscribe((status) => {
                    if(status == SyncStatus.CHECKING_FOR_UPDATE)
                        alert("Checking for update");
                    if(status == SyncStatus.DOWNLOADING_PACKAGE)
                        alert("Downloading Package");
                    if(status == SyncStatus.IN_PROGRESS)
                        alert("In Progress");
                    if(status == SyncStatus.INSTALLING_UPDATE)
                        alert("Installing Update");
                    if(status == SyncStatus.UP_TO_DATE)
                        alert("Up to Date");
                    if(status == SyncStatus.UPDATE_INSTALLED)
                        alert("Update Installed");
                    if(status == SyncStatus.ERROR)
                        alert("Error Occurred While Downloading");
                })
            }
        )
    }

    // Method to check about
    public about(val){
        const alert = this.alertCtrl.create({
            title: 'About',
            message: `
                Sks Antibiotic Policy (2017)<br>
                v1.0
            `,
            buttons: ['Close']
          });
        alert.present();
        this.selectedTitle = val.target.textContent;
        this.viewCtrl.dismiss(this.selectedTitle);
    }

}