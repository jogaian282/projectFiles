import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpdvardPage } from './opdvard';
import {SuperTabsModule,SuperTabsController} from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    OpdvardPage,
  ],
  imports: [
    IonicPageModule.forChild(OpdvardPage),
    SuperTabsModule
  ],
  providers:[
    SuperTabsController
  ]
})
export class OpdvardPageModule {}
