import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public Message : String ;
  public position : number = 3;

  constructor() { }

  ngOnInit() {

    if (this.position == 1){
      this.Message = "Felisitation";
    }
    if (this.position >= 2 && this.position < 10){

       this.Message = "un petit effort ";

    }
    if (this.position > 10)
    {
      this.Message = "vous pouvez faire mieux !!";
    }


  }
}
