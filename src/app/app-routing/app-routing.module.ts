import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../ui/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../404/page-not-found/page-not-found.component';
import { AboutComponent } from '../ui/about/about.component';
import { AppComponent } from '../app.component';
import { NudgeComponent } from '../ui/nudge/nudge.component';
import { CarbonComponent } from '../ui/carbon/carbon.component';

const routes: Routes = [
  { path: '', component: NudgeComponent },
  { path: 'nudge', component: NudgeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carbon', component: CarbonComponent },
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