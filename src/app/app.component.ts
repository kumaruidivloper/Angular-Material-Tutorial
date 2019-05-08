import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { SimpledialogcomponentComponent } from './simpledialogcomponent/simpledialogcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Material-Tutorial';

 firstName: string;
 lastName: string;
 dialogConfig: MatDialogConfig;
 dialogWithForm: MatDialogRef<SimpledialogcomponentComponent>;

  constructor(private dialogModel: MatDialog) { }

  ngOnInit() {
  }

  dialogForm() {
    // Opening the dialog component
    const dialogWithForm = this.dialogModel.open(SimpledialogcomponentComponent, {
    width: '250px',
    data: { firstName: this.firstName, lastName: this.lastName }
    });
    // When user close the dialog
    dialogWithForm.afterClosed().subscribe(result => {
    console.log('You have closed the dialog');
    if (result) {
    this.firstName = result.firstName;
    this.lastName = result.lastName;
    }
    });
    }
}
