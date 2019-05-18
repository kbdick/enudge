import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CarbonComponent } from './carbon/carbon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { NudgeComponent } from './nudge/nudge.component';

@NgModule({
  declarations: [
    AboutComponent,
    BrandComponent,
    CarbonComponent,
    DashboardComponent,
    NavComponent,
    NudgeComponent
    ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BrandComponent,
    NavComponent
  ]
})
export class UiModule { }