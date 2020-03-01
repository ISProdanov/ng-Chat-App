import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PanelComponent} from './panel.component';

import {MessagesComponent, PanelSettingsComponent} from './pages';
import {PanelPathsEnum} from '../../shared/enums';
import {PanelResolver} from './resolvers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PanelComponent,
    resolve: {
      data: PanelResolver
    },
    children:
      [
        {
          path: '',
          redirectTo: 'messages',
          pathMatch: 'full'
        },
        {
          path: 'messages',
          component: MessagesComponent
        },
        {
          path: 'settings',
          component: PanelSettingsComponent
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
