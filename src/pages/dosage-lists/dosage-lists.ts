import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DosageProvider } from '../../providers/dosage/dosage';

@IonicPage()
@Component({
  selector: 'page-dosage-lists',
  templateUrl: 'dosage-lists.html',
})

export class DosageListsPage {

  dosages;
  currentDosage;
  term:string = '';
  keyValueDosage;
  isSearched:boolean = false;
  isVisible:boolean = false;

  items = [
      "Penicillins",
      "Cephalosporins",
      "Carbapenems",
      "Monobactams",
      "Fluoroquinolones",
      "Aminoglycosides",
      "Glycopeptides and lipoglycopeptides",
      "Macrolides,lincosamides and streptogramins",
      "Tetracyclines",
      "Oxazolidinones",
      "Miscellaneous agents"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dosageProvider:DosageProvider) {
  }

  ionViewDidLoad(){

    this.dosageProvider.loadDosages().subscribe(data =>{
        this.keyValueDosage = Object.keys(JSON.parse(JSON.stringify(data)));
        this.currentDosage = JSON.parse(JSON.stringify(data));
    })

  }

  itemSelected(item){
    this.loadDosage(item);
  }

  searchFn(ev: any) {
    this.isVisible = true;
    if(this.isVisible && (ev.target.value.length > 2)){        
        this.isSearched = true;
        this.term = ev.target.value;
    }
    else{
      this.isSearched = false;
    }
  }

  onClear(ev){
    this.term = "";
    this.isSearched = false;
  }

  loadDosage(item):void{
    this.dosageProvider.loadDosages().subscribe(data =>{
      this.dosages = Object.keys(JSON.parse(JSON.stringify(data)));
      this.currentDosage = JSON.parse(JSON.stringify(data));
      for (var key=0; key < this.dosages.length;key++) {
        if(item == this.dosages[key]){
          this.navCtrl.push('HomePage',{
            dosageItemName : item,
            dosageLists : this.currentDosage[item]
          });
        }
      }

    });
  }



}
