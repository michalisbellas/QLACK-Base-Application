/* tslint:disable:max-line-length */

import {AppComponent} from './app.component';

import {routing} from './app.routes';
import {LogoutComponent} from './auth/logout.component';
import {NewPasswordComponent} from './auth/new-password.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgot-password.component';

import {HeaderComponent} from './shared/layout/header.component';
import {FooterComponent} from './shared/layout/footer.component';
import {SidenavComponent} from './shared/layout/sidenav.component';
import {DisplayModule} from './shared/component/display/display.module';
import {CanActivateGuard} from './shared/guards/can-activate-guard';
import {OkCancelModalComponent} from './shared/component/display/ok-cancel-modal/ok-cancel-modal.component';
import {TextModalComponent} from './shared/component/display/text-modal/text-modal.component';
import {HomeComponent} from './home/home.component';
import {FileuploadComponent} from './fileupload/fileupload.component';

import { FormDialogComponent } from './form-dialog/form-dialog.component';
import {WINDOW_PROVIDERS} from "./services/window.service";
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormOpenComponent } from './form-open/form-open.component';
import {AppConstants} from "./app.constants";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {JwtModule} from "@auth0/angular-jwt";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {NgProgressModule} from "@ngx-progressbar/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgProgressHttpModule} from "@ngx-progressbar/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {QLACKFormValidationModule} from "@qlack/form-validation";
import {CookieService} from "ngx-cookie-service";
import {RxStompService} from "@stomp/ng2-stompjs";
import {QFormsModule} from "@qlack/forms";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function getJwtToken(): string {
  return localStorage.getItem(AppConstants.JWT_STORAGE_NAME);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,
    LogoutComponent,
    NewPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    FileuploadComponent,
    FormDialogComponent,
    FormEditComponent,
    FormOpenComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getJwtToken,
        whitelistedDomains: new Array(new RegExp('^null$'))
      }
    }),
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    DisplayModule,
    NgProgressModule.withConfig({
      trickleSpeed: 500,
      debounceTime: 500,
      meteor: false,
      spinner: false,
      thick: false,
      color: '#50A7D7'
    }),
    NgProgressHttpModule,
    MatSelectModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    QLACKFormValidationModule
  ],
  exports: [],
  providers: [
    WINDOW_PROVIDERS,
    CookieService,
    CanActivateGuard,
    RxStompService,
    QFormsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [OkCancelModalComponent,TextModalComponent, FormDialogComponent],
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
