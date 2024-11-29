import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonButtons, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { createAnimation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonModal,
    IonButtons,
    IonItem,
    IonLabel,
    IonInput,
    ExploreContainerComponent
  ],
})
export class Tab3Page {
  @ViewChild(IonModal)
  modal!: IonModal;

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter() {
    const enterAnimation = (baseEl: HTMLElement) => {
      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: HTMLElement) => {
      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-in')
        .duration(500)
        .addAnimation([
          this.animationCtrl
            .create()
            .addElement(baseEl.querySelector('ion-backdrop')!)
            .fromTo('opacity', 'var(--backdrop-opacity)', '0.01'),
          this.animationCtrl
            .create()
            .addElement(baseEl.querySelector('.modal-wrapper')!)
            .fromTo('transform', 'translateY(0%)', 'translateY(100%)')
        ]);
    };

    this.modal.enterAnimation = enterAnimation;
    this.modal.leaveAnimation = leaveAnimation;
  }

  closeModal() {
    this.modal.dismiss();
  }
}
