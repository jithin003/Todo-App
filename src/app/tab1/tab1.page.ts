import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';

import { AddTodoPage } from '../add-todo/add-todo.page';
import { Storage } from '@ionic/storage-angular';
import { AccordionPage } from '../accordion/accordion.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selected = 'calendar';
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  constructor(
    public formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {
    this.storage.create();
    this.storage.get('toDos').then(data =>{
      console.log('data', data);
      if (data) {
        this.eventSource = data;
        data.forEach(element => {
          if(element.endTime < new Date()){
            element.allDay = false;
          }
        });
        this.eventSource = data;
        this.storage.set('toDos', data);
      }


    })
  }

  async addEvent() {
    const modal = await this.modalCtrl.create({
      component: AddTodoPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        this.eventSource.push(result.data.event);
        this.storage.set('toDos', this.eventSource);

      }
    });
  }

  async showEvent() {
    const modal = await this.modalCtrl.create({
      component: AccordionPage,
      cssClass: 'accordion-css',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {

    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    // let start = moment(event.startTime).format('LLLL');
    // let end = moment(event.endTime).format('LLLL');

    // let alert = this.alertCtrl.create({
    //   title: '' + event.title,
    //   subTitle: 'From: ' + start + '<br>To: ' + end,
    //   buttons: ['OK']
    // })
    // alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  getEvent() {
    console.log('selected:',this.convert(this.selectedDay));
    let currentDay = this.selectedDay;
    const endD = new Date(currentDay.setHours(23, 59, 59, 999));
    if (this.eventSource) {
      const currentEvents = this.eventSource.filter(obj => {
        console.log('obj.endTime',this.convert(obj.endTime));

        return this.convert(obj.endTime) == this.convert(this.selectedDay);
      })
      console.log('events:', this.eventSource);

      console.log('selected:',endD.toUTCString());

      return currentEvents;
    }

    return [];


  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  getTime(obj) {
    return obj.toLocaleTimeString();
  }

  getFirstObjectToNext() {
    if ( this.eventSource ) {
      const currentEvents = this.eventSource.find(obj => {


        return obj.allDay == true;
      });
      console.log('obj.endTime',this.eventSource);
      return currentEvents;
    }
    return '';
  }

  getDayValue(value) {
    //
    if (value) {
      const obj = new Date(value);
      return moment(obj).format('DD-MMM-YYYY');
    }
    return '';
   // return new Date(obj.getFullYear(), obj.getMonth(), obj.getDate());
  }
}
