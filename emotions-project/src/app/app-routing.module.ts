import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
  { path: 'test', loadChildren: () => import('./features/test/test.module').then(m => m.TestModule) }, 
  { path: 'result', loadChildren: () => import('./features/result/result.module').then(m => m.ResultModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
