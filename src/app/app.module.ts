import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [AppComponent,NotificationsComponent],
  entryComponents: [NotificationsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    DocumentViewer,
    CallNumber,
    Geolocation,
    NavController,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
