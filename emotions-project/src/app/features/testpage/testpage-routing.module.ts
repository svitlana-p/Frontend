import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './testpage.component';

const routes: Routes = [{ path: '', component: TestpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpageRoutingModule { }
