import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  toDoForm: FormGroup;
  toDo = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true,
    status: true
  };
  title = '';
  desc = '';
  startTime = null;
  endTime = '';
  allDay = true;
  status = true;
  constructor(private modalCtrl: ModalController, public formbuilder: FormBuilder,) {
    this.toDoForm = formbuilder.group({
      todotitle: ['', Validators.compose([Validators.required])],
      desc: [''],
      startTime: ['', Validators.compose([Validators.required])],
      endTime: [''],
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.toDoForm)
    if (this.toDoForm.valid) {
      this.toDo.title = this.toDoForm.get('todotitle').value;
      this.toDo.desc = this.toDoForm.get('desc').value;
      this.toDo.startTime = this.toDoForm.get('startTime').value;
      this.toDo.endTime = this.toDoForm.get('endTime').value;
      this.toDo.allDay = true;
      this.toDo.status = true;
      console.log('Event:', this.toDo);
      this.modalCtrl.dismiss({event: this.toDo});
    }
    else {
      alert ('Please fill fields...');
    }
  }



  onTimeSelected(ev) {
    this.toDo.startTime = new Date(ev.selectedTime);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
