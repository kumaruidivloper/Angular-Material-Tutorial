import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-simpledialogcomponent',
  templateUrl: './simpledialogcomponent.component.html',
  styleUrls: ['./simpledialogcomponent.component.scss']
})
export class SimpledialogcomponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SimpledialogcomponentComponent>) { }

    close(): void {
    this.dialogRef.close();
    }

  ngOnInit() {
  }

}
