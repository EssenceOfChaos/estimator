import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public propertyService: PropertyService) {}
  prod: boolean = environment.production;
  res;

  addressForm = new FormGroup({
    street: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  ngOnInit(): void {
    if (isDevMode()) {
      console.log('👋 Running in Development! ');
    } else {
      console.log('💪 Running in Production! ');
    }
  }

  onSubmit() {
    console.log(this.addressForm.value);
    this.propertyService.getPropertyData(this.addressForm).subscribe((res) => {
      console.log(res);
    });
  }
}
