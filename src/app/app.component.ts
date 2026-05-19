
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeSharp, cardSharp, personSharp, bagHandleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [NgFor, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio',  url: '/home', icon: 'home' },
    { title: 'Pagar',   url: '/pay',  icon: 'card' },
    { title: 'Perfil',  url: '/perfil', icon: 'person' },
    { title: 'Producto', url: '/producto', icon: 'bag-handle' },
    { title: 'Market', url: '/market', icon: 'bag-handle' }
  ];
  constructor() {
    addIcons({ homeSharp, cardSharp, personSharp, bagHandleSharp });
  }
}
