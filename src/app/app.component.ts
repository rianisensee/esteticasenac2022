import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'information-circle' },
    { title: 'Procedimentos', url: '/procedimentos', icon: 'chevron-expand' },
    { title: 'Time', url: '/time', icon: 'people-circle' },
    { title: 'Contato', url: '/contato', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'person' },
  ]
  constructor() {}
}