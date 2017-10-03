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
    public chkUpdate(val){
        this.platform.ready().then(
            () =>{
                this.codePush.sync().subscribe((status) => {
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
                this.selectedTitle = val.target.textContent;
                this.viewCtrl.dismiss(this.selectedTitle);
            }
        )
    }

    // Method to check about
    public about(val){
        const alert = this.alertCtrl.create({
            title: 'About Antibiotic Policy',
            message: `
                <div> Version v0.0.1 </div><br>
                <div> Developed by </div><br>
                <span><strong> Raster Images Pvt Ltd </strong></span>
            `,
            buttons: ['Close']
          });
        alert.present();
        this.selectedTitle = val.target.textContent;
        this.viewCtrl.dismiss(this.selectedTitle);
    }

}