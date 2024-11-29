import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ExploreContainerComponent
  ],
})
export class SettingsPage {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleted');
          }
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => {
            console.log('Saved');
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Task completed successfully',
      duration: 3000,
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel',
          handler: () => {
            console.log('Undo clicked');
          }
        }
      ]
    });

    toast.onDidDismiss().then(() => {
      console.log('Toast dismissed');
    });

    await toast.present();
  }

  async showCustomToast() {
    const customEnterAnimation = (baseEl: HTMLElement) => {
      return createAnimation()
        .addElement(baseEl)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(-100%)' },
          { offset: 1, opacity: '1', transform: 'translateY(0)' }
        ])
        .duration(500);
    };

    const customLeaveAnimation = (baseEl: HTMLElement) => {
      return createAnimation()
        .addElement(baseEl)
        .keyframes([
          { offset: 0, opacity: '1', transform: 'translateY(0)' },
          { offset: 1, opacity: '0', transform: 'translateY(-100%)' }
        ])
        .duration(500);
    };

    const toast = await this.toastController.create({
      message: 'This is a custom toast',
      duration: 2000,
      position: 'top', // Try: 'top', 'middle', or 'bottom'
      cssClass: 'custom-toast', // Add your own CSS class
      enterAnimation: customEnterAnimation,
      leaveAnimation: customLeaveAnimation
    });
    await toast.present();
  }
}