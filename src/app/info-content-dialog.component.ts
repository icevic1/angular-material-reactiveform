import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidationErrors} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {IEntry, EGender} from './constants';


@Component({
  selector: 'info-content-dialog',
  templateUrl: 'info-content-dialog.component.html',
})
export class InfoContentDialogComponent implements OnInit {

  form: FormGroup;
  title: string;
  // model: IEntry;
  EGender: any = EGender;

  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<InfoContentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.title = data.title;
  }


  ngOnInit() {

    this.form = this.fb.group({
      name: [, {validators: [Validators.required], updateOn: 'change'}],
      email: [, {validators: [Validators.required, Validators.email], updateOn: 'change'}],
      age: [, {updateOn: 'change'}],
      gender: [, {validators: [Validators.required], updateOn: 'change'}],
    });

  }

  submitForm(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    // this.dialogRef.close();
  }
}
