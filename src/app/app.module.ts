import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { DropdownToggleDirective } from './shared/dropdown-toggle.directive';

import { RemoteService } from './shared/remote.service';
import { TicketService } from './ticket/ticket.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { UtilsService } from './shared/utils.service';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketDetailviewComponent } from './ticket/ticket-detailview/ticket-detailview.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailviewComponent } from './user/user-detailview/user-detailview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketListComponent,
    TicketFormComponent,
    TicketDetailviewComponent,
    HeaderComponent,
    DropdownToggleDirective,
    PageNotFoundComponent,
    SignupComponent,
    SigninComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    RemoteService,
    AuthService, AuthGuardService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
