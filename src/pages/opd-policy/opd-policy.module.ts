import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpdPolicyPage } from './opd-policy';

@NgModule({
  declarations: [
    OpdPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(OpdPolicyPage),
  ],
})
export class OpdPolicyPageModule {}
