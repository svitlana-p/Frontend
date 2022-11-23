import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) }, 
  { path: 'test', loadChildren: () => import('./features/testpage/testpage.module').then(m => m.TestpageModule) }, 
  { path: 'result', loadChildren: () => import('./features/resultpage/resultpage.module').then(m => m.ResultpageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
