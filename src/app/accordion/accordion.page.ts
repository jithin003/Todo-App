import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  shownGroup = null;
  menuLevel1 = null;
  menuLevel2 = null;
  menuLevel3 = null;
  eventSource: any = [];
  months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor(private storage: Storage, private modalCtrl: ModalController) {
    this.storage.get('toDos').then(data =>{
      console.log('data', data);
      this.eventSource = data;

    });
  }

  ngOnInit() {
    this.storage.get('toDos').then(data =>{
      console.log('data', data);
      this.eventSource = data;

    });
  }

  levelNav1(navX: string) {
    if (this.isNav1Displayed(navX)) {
      this.menuLevel1 = null;
    } else {
      this.menuLevel1 = navX;
    }
  }

  isNav1Displayed(navX: string) {
    return this.menuLevel1 === navX;
  }

  levelNav2(navX: string) {
    if (this.isNav2Displayed(navX)) {
      this.menuLevel2 = null;
    } else {
      this.menuLevel1 = navX;
      this.menuLevel2 = navX;
    }
  }

  isNav2Displayed(navX: string) {
    return this.menuLevel2 === navX;
  }

  levelNav3(navX: string) {
    if (this.isNav3Displayed(navX)) {
      this.menuLevel3 = null;
    } else {
      this.menuLevel2 = navX;
      this.menuLevel3 = navX;
    }
  }

  isNav3Displayed(navX: string) {
    return this.menuLevel3 === navX;
  }

  clearAccordionNav() {
    this.menuLevel1 = null;
    this.menuLevel2 = null;
    this.menuLevel3 = null;
  }
  getDays(month) {
    var date = new Date(2021, month, 1);
    var days = [];
    while (date.getMonth() === month) {

      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    //const getDaysInMonth = (month, 2021) => (new Array(31)).fill('').map((v,i)=>new Date(2021,month-1,i+1)).filter(v=>v.getMonth()===month-1);
    console.log(days);
    return days;
  }
  getEvents(month, day) {
    console.log('event source:', this.eventSource);
    var date = new Date(2021, month, day);
    console.log('day:', date);
    const currentEvents = this.eventSource.filter(obj => {
      //console.log('obj.endTime',this.convert(obj.endTime));

      return this.convert(obj.endTime) == this.convert(date);
    })
    return currentEvents;
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
