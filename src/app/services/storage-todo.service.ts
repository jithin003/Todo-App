import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageTodoService {

  constructor() { }
  addToStorage(data) {
    localStorage.setItem('toDos', data);
  }

  getTodos() {
    return localStorage.getItem('toDos');
  }
}
