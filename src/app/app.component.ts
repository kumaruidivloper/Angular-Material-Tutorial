import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Material-Tutorial';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message) {
    this.snackBar.open(message);
  }

  openSnackBar1(message, action) {
    this.snackBar.open(message, action);
  }

  openSnackBar2(message, action) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was trigger');
    })
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000})
  }
}


@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom Snackbar</span>`
})

export class CustomSnackBarComponent {}
