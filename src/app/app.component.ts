import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Pages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    }
  ];
  constructor(
    private storage: Storage,
    private platform: Platform,

    ) {

  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.storage.create();
  //   });
  // }
}
