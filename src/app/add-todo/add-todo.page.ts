import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true,
    status: true
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  save() {
    if (this.event.startTime !== null && this.event.title) {
      this.modalCtrl.dismiss({event: this.event})
    }
    else {
      alert ('Please fill fields...')
    }
  }



  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
