import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  iframeSrc: any;

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,  private sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8081/fr/" + data.app + "/" + data.form + "/edit/" + data.id + "?orbeon-embeddable=true");
    console.log(this.iframeSrc);
  }

  ngOnInit() {
    console.log(this.iframeSrc);
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
  }
}
