import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  firstName: string;
  lastName: string;
 }

@Component({
  selector: 'app-simpledialogcomponent',
  templateUrl: './simpledialogcomponent.component.html',
  styleUrls: ['./simpledialogcomponent.component.scss']
})
export class SimpledialogcomponentComponent implements OnInit {
  public firstName = '';
  public lastName = '';
  constructor(
    public dialogRef: MatDialogRef<SimpledialogcomponentComponent>,
 @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

 onNoClick(): void {
  this.dialogRef.close();
  }

  ngOnInit() {
  }

}
