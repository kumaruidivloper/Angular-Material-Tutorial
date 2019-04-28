import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Material-Tutorial';

  minDate = new Date();
  maxDate = new Date(2019, 28, 10);

  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  }
}
