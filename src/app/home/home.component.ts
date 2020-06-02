import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  prod: boolean = environment.production;
  address;
  ngOnInit(): void {
    if (isDevMode()) {
      console.log('👋 Running in Development! ');
    } else {
      console.log('💪 Running in Production! ');
    }
  }

  onSubmit(value) {
    console.log(value);
  }
}
