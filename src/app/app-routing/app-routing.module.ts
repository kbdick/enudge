import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { UserComponent } from '../auth/user/user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../404/page-not-found/page-not-found.component';
import { AboutComponent } from '../about/about.component';
import { AppComponent } from '../app.component';
import { NudgeComponent } from '../nudge/nudge.component';

const routes: Routes = [
  { path: '', component: NudgeComponent },
  { path: 'nudge', component: NudgeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
            RouterModule
        ],
  declarations: []
})
export class AppRoutingModule { }