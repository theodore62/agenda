import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;
@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  map: any;
  baseUrl = 'assets/images/';
  constructor( public geolocation: Geolocation) {

    this.ngOnInit();
  }

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = resp.coords.latitude;
      let lng = resp.coords.longitude;
      const latLng = new google.maps.LatLng(lat, lng);
      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
      });


      this.addMyPosition(latLng);
      this.addHousePosition();
      this.addCarPosition();
    });
  }

  addMyPosition(latLng) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      title: 'My position'
    });
    this.addInfoWindowToMarker(marker);


  }


  addHousePosition() {
    const icon = this.baseUrl + 'home-address.png';
    const latLng = new google.maps.LatLng( 50.6333, 2.25);
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      title: 'House position',
      icon: {
        url: icon,
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16),
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    this.addInfoWindowToMarker(marker);
  }


  addCarPosition() {
    const icon = this.baseUrl + 'car.svg';
    const latLng = new google.maps.LatLng( 50.6333, 2.25);
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      title: 'Car position',
      icon: {
        url: icon,
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16),
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    this.addInfoWindowToMarker(marker);
  }


  addInfoWindowToMarker(marker) {
    const infoWindowContent = '<div id="content">' + marker.title + '</div>';
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }



}
