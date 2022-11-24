import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultpageRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultpageRoutingModule
  ]
})
export class ResultModule { }
