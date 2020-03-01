import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppPathsEnum} from './shared/enums';

import {PageNotFoundComponent} from './pages';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuardService} from './shared/services';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppPathsEnum.Panel,
    pathMatch: 'full'
  },
  {
    path: 'panel',
    loadChildren: './pages/panel/panel.module#PanelModule',
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
