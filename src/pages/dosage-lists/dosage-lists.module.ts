import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosageListsPage } from './dosage-lists';
import { SearchPipeModule } from '../../pipes/search/search.module';

@NgModule({
  declarations: [
    DosageListsPage,
  ],
  imports: [
    IonicPageModule.forChild(DosageListsPage),
    SearchPipeModule
  ],
})

export class DosageListsPageModule {}
