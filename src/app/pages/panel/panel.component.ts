import {Component, OnInit} from '@angular/core';

import {PanelPathsEnum} from '../../shared/enums';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public panelPathsEnum = PanelPathsEnum;

  constructor() {
  }

  ngOnInit() {
  }
}
