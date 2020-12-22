import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoContentDialogComponent} from './info-content-dialog.component';
import {EGender, IEntry} from './constants';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  // public entry: IEntry = {name: 'maria', age: 27, email: 'ssss@goggo.com', gender: EGender.Male};
  public entries: IEntry[] = [];

  constructor(public dialog: MatDialog) {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Add Information',
    };

    const dialogRef = this.dialog.open(InfoContentDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.entries.push(result);
      }
    });
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
