import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qInterView';
  lang$:Observable<string>
  dir:string= ""
  constructor(private store: Store<{lang: string}> ) {
    this.lang$ = this.store.select('lang')

    this.lang$.subscribe((lang)=> {
      this.dir = (lang == "en")? 'ltr' : 'rtl'
    })
  }

}
