import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton,
    IonButton,
  ],
})
export class HomePage {

  nombre: string = 'Leidy';

  infoCards = [
    { icono: '🚚', titulo: 'Envío gratis', sub: 'En compras mayores a $150.000', colorBg: 'rgba(14, 165, 233, 0.15)' },
    { icono: '🔄', titulo: 'Devolución en 30 días', sub: 'Sin preguntas, sin complicaciones', colorBg: 'rgba(124, 58, 237, 0.15)' },
    { icono: '🔒', titulo: 'Pago 100% seguro', sub: 'Nequi, Daviplata, Bancolombia y más', colorBg: 'rgba(13, 122, 62, 0.18)' },
    { icono: '⭐', titulo: 'Calidad garantizada', sub: 'Solo productos con 4 estrellas o más', colorBg: 'rgba(245, 166, 35, 0.15)' },
    { icono: '🎁', titulo: 'Ofertas exclusivas', sub: 'Nuevas promociones cada semana', colorBg: 'rgba(252, 101, 31, 0.15)' },
  ];

}
