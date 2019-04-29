import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular-Material-Tutorial';

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
}


