import {NgModule} from '@angular/core';

import {PanelComponent} from './panel.component';
import {PanelRoutingModule} from './panel-routing.module';

import {SharedModule} from '../../shared/shared.module';

import {ChatFormComponent, FeedsComponent, MessageComponent, MessagesComponent, PanelSettingsComponent} from './pages';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {HelpComponent} from './pages/help/help.component';

import {PanelSettingsPersonalComponent} from './components';
import {PanelResolver} from './resolvers';

@NgModule({
  imports: [
    PanelRoutingModule,
    SharedModule
  ],
  declarations: [
    PanelComponent,
    PanelSettingsComponent,
    PanelSettingsPersonalComponent,
    ChatFormComponent,
    FeedsComponent,
    MessageComponent,
    MessagesComponent,
    ContactsComponent,
    HelpComponent
  ],
  providers: [
    PanelResolver
  ]
})
export class PanelModule {
}
