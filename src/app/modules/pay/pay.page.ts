import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFooter, IonButton } from '@ionic/angular/standalone';
import { UserComponent } from 'src/app/components/user/user.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { SendComponent } from 'src/app/components/send/send.component';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFooter, IonButton, CommonModule, FormsModule, UserComponent, ListComponent, SendComponent]
})
export class PayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
