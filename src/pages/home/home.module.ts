import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SearchPipeModule} from '../../pipes/search/search.module';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),SearchPipeModule
  ],
})
export class HomePageModule {}
