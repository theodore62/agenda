import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(private router: Router,public navCtrl: NavController) { }

  ngOnInit() {}


  valider(){

  }

  annuler(){
    this.navCtrl.pop();
  }
}
