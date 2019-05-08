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

  simpleDialog: MatDialogRef<SimpledialogcomponentComponent>;

  constructor(private dialogModel: MatDialog) { }

  ngOnInit() {
  }

  dialog() {
  this.simpleDialog = this.dialogModel.open(SimpledialogcomponentComponent);
  }
}
