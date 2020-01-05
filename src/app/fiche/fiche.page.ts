import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.page.html',
  styleUrls: ['./fiche.page.scss'],
})
export class FichePage implements OnInit {

  constructor(private callNumber: CallNumber,private router: Router) { }

  ngOnInit() {
  }
  call(){

    this.callNumber.callNumber("0604138940", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  newCommande(){
    this.router.navigate(['/ajoutercommande'])
  }
  details(){
    this.router.navigate(['/details'])
  }
  nouveaucompterendu(){
    this.router.navigate(['/nouveaucompterendu'])
  }
  localisation(){
    this.router.navigate(['/localisation'])
  }


}
