import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { TestpageComponent } from './testpage.component';


@NgModule({
  declarations: [
    TestpageComponent
  ],
  imports: [
    CommonModule,
    TestpageRoutingModule
  ]
})
export class TestpageModule { }
