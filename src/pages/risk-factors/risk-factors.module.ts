import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskFactorsPage } from './risk-factors';

@NgModule({
  declarations: [
    RiskFactorsPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskFactorsPage),
  ],
})
export class RiskFactorsPageModule {}
