import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, notifications, settingsOutline } from 'ionicons/icons'; // Import settingsOutline icon

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
})
export class TabsPage {
  notificationCount = 3; // This will be displayed in the badge
  
  constructor() {
    addIcons({ home, person, notifications, settingsOutline }); // Add settingsOutline icon
  }
}