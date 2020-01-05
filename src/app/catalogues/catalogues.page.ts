import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.page.html',
  styleUrls: ['./catalogues.page.scss'],
})
export class CataloguesPage implements OnInit {

  constructor(private document: DocumentViewer,public navCtrl: NavController) {

    this.openLocalPDF();

  }

  ngOnInit() {
  }

  openLocalPDF(){

    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };

    this.document.viewDocument('assets/CYBERGUN.pdf', 'application/pdf', options);

  }

}
