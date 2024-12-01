import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { langAction } from '../../store/language/lang.action';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDarkMode: boolean = false;

  constructor(private store: Store<{lang : string}>){}


  langAr() {
    this.store.dispatch(langAction({lang : "ar"}))
    this.changeLang('ar')
  }

  langEn() {
    this.store.dispatch(langAction({ lang: "en" }))
    this.changeLang('en')
  }


  changeLang(lang: string) {
    this.store.dispatch(langAction({ lang }));
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode'); 
      body.classList.remove('dark-mode');
    }
  }
}
