import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AuthGuardService } from './auth/auth-guard.service';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketDetailviewComponent } from './ticket/ticket-detailview/ticket-detailview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//add application routes here
const routes: Routes = [
  //{ path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'tickets', component: TicketComponent, canActivate: [AuthGuardService], children: [
    { path: 'edit/:id', component: TicketFormComponent },
    { path: 'detailview/:id', component: TicketDetailviewComponent }
  ] },
  //catch all other undefined routes and direct to page not found component
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}