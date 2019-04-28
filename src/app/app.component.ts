import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Material-Tutorial';
  notifications = 2;
  notificationsZero = 0;
  showSpinner = false;
  dataText = false;


  loadData() {
    this.showSpinner = true;
    this.dataText = false;
    setTimeout(() => {
      this.showSpinner = false;
      this.dataText = true;
    }, 5000)
  }
}
