import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientRiskPage } from './patient-risk';
import {SuperTabsModule,SuperTabsController} from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    PatientRiskPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientRiskPage),SuperTabsModule
  ],
  providers:[SuperTabsController]
})
export class PatientRiskPageModule {}
