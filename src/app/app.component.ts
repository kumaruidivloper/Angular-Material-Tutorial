import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Material-Tutorial';

  public selectedValue: string;
  public selectedGroupValue: string;
  public selectedGroupValueMulti: string;
}
