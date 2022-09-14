// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
// import { HeaderComponent } from './layout/header/header.component';
// import { MainAuthComponent } from './layout/main-auth/main-auth.component';
// import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
// import { SidenavComponent } from './layout/sidenav/sidenav.component';
// import { EmployeeDetailComponent } from './routes/employee/employee-detail/employee-detail.component';
// import { EmployeeListComponent } from './routes/employee/employee-list/employee-list.component';
// import { LoginComponent } from './routes/sessions/login/login.component';
// import { RegisterComponent } from './routes/sessions/register/register.component';
// import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AuthComponent,
//     HeaderComponent,
//     MainAuthComponent,
//     MainLayoutComponent,
//     SidenavComponent,
//     EmployeeDetailComponent,
//     EmployeeListComponent,
//     LoginComponent,
//     RegisterComponent,
//     SnackbarComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

const MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  LayoutModule,
  SharedModule,
  AuthModule
]

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
