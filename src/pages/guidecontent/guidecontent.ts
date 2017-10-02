import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-guidecontent',
  templateUrl: 'guidecontent.html',
})

export class GuidecontentPage {

  @ViewChild(Content) content: Content;
  @ViewChild('guideline1') guideline1: any;
  @ViewChild('guideline2') guideline2: any;
  @ViewChild('guideline3') guideline3: any;
  @ViewChild('guideline4') guideline4: any;
  @ViewChild('guideline5') guideline5: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidecontentPage');
  }

  public scrollToTop(){
    this.content.scrollToTop();
  }

  public guideLineContent1() {
    this.content.scrollTo(0, this.guideline1.nativeElement.offsetTop, 500);
  }

  public guideLineContent2() {
    this.content.scrollTo(0,this.guideline2.nativeElement.offsetTop, 500);
  }

  public guideLineContent3() {
    this.content.scrollTo(0, this.guideline3.nativeElement.offsetTop, 500);
  }

  public guideLineContent4(){
    this.content.scrollTo(0, this.guideline4.nativeElement.offsetTop, 500);
  }

  public guideLineContent5(){
    this.content.scrollTo(0, this.guideline5.nativeElement.offsetTop, 500);
  }

}
