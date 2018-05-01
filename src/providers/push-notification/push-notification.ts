import { Injectable } from '@angular/core';

//plugins
import { OneSignal } from '@ionic-native/onesignal';

import { Platform } from "ionic-angular";

@Injectable()
export class PushNotificationProvider {

  constructor(private oneSignal: OneSignal,
    public platform: Platform) {
    console.log('Hello PushNotificationProvider Provider');
  }

  init_notification() {
    if (this.platform.is("cordova")) {
      this.oneSignal.startInit('3ab843d2-8cac-4cbb-a457-e6f4d039b2bc', '831725153826');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log("Notificacion Recibida");
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log("Notificacion Abierta");
      });

      this.oneSignal.endInit();
    } else {
        console.log("OneSignal no funciona en Chrone");
    }
  }

}
