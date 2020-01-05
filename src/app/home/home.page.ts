import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
// import { NotificationsComponent } from '../notifications/notifications.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController,public popoverCtrl: PopoverController,public alertController: AlertController) {}



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

    async presentToastWithOptions() {
      const toast = await this.toastController.create({

        position: 'top',
        buttons: [
          {
            icon:'close-circle',
            text: 'rendez-vous à 15h30 le 3/12/2019',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      toast.present();
    }

    // async presentPopover(ev: any) {
    //   const popover = await this.popoverCtrl.create({
    //     component: NotificationsComponent,
    //     event: ev,
    //     translucent: true
    //   });
    //   return await popover.present();
    // }
    async presentPopover() {
      var user =['hello','bonjour'];
      const alert = await this.alertController.create({
        header: 'Ajouter un rendez-vous',
        inputs: [
          {
            placeholder:'date',
            label:'date',
             type:'date'
          },
          {

            placeholder:'heure',
            label:'heure',
            type:'time'
          },

          {
            placeholder:'nom de la personne ',
            label:'name',
            type:'search'
          },


        ],

        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });

      await alert.present();
    }




}
