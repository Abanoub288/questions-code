import { Component, OnInit } from '@angular/core';
import { QeuServicesService } from '../../services/qeu-services.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  lang$: Observable<string>;
  questions: any[] = [];

  constructor(private store: Store<{ lang: string }>, private _qeuservices: QeuServicesService) {
    this.lang$ = this.store.select('lang');
  }

  ngOnInit() {
    this.lang$.subscribe((lang) => {
      this.getQuestions(lang);
    });
  }

  getQuestions(lang: string) {
    this.questions = this._qeuservices.getQuestions(lang) || [];
  }

}



