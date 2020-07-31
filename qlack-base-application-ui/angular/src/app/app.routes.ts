import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './auth/login.component';
import {NewPasswordComponent} from './auth/new-password.component';
import {LogoutComponent} from './auth/logout.component';
import {HomeComponent} from './home/home.component';
import {FileuploadComponent} from './fileupload/fileupload.component';
import {CanActivateGuard} from './shared/guards/can-activate-guard';
import {FormEditComponent} from "./form-edit/form-edit.component";
import {FormOpenComponent} from "./form-open/form-open.component";

// Configuration of Router with all available AppConstants.Routes.
export const routing: ModuleWithProviders<any> = RouterModule.forRoot([
    // Redirect for empty path.
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    {path: 'login', component: LoginComponent},
    {path: 'form-open', component: FormOpenComponent},
    {path: 'form-edit/:app/:form/:id', component: FormEditComponent},
    {path: 'new-password', component: NewPasswordComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'home', component: HomeComponent,  canActivate: [CanActivateGuard]},
    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      canActivate: [CanActivateGuard]
    },
    {path: 'fileupload', component: FileuploadComponent,  canActivate: [CanActivateGuard]},
    //default redirect
    {path: '**', redirectTo: 'login'},
  ],
  {
    enableTracing: false
  });
