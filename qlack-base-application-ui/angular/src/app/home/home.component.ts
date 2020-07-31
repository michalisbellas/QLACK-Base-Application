import {Component, EventEmitter, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormDialogComponent} from "../form-dialog/form-dialog.component";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {WINDOW} from "../services/window.service";
import {Router} from "@angular/router";

// export const WINDOW = new InjectionToken<Window>(
//   'WindowToken',
//   typeof window !== 'undefined' && window.document ? {providedIn: 'root', factory: () => window} : undefined
// );

interface Window {
  openApplication: any;
}

@Component({
  selector: 'app-home.component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() onAppClick = new EventEmitter();
  iframeSrc: any;

  constructor(public http: HttpClient, public dialog: MatDialog, private sanitizer: DomSanitizer, @Inject(WINDOW) public window: Window, private router: Router) {
  }

  ngOnInit() {
  }

  openApplication(id: string, app: string, form: string) {
    const formDialog = this.dialog.open(FormDialogComponent, {
      data: {
        id: id,
        app: app,
        form: form
      }
    });

    formDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
