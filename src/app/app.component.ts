import {Component, OnInit} from '@angular/core';
import {AppPathsEnum} from "./shared/enums/app-paths.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public appPathsEnum = AppPathsEnum;

  ngOnInit(): void {
  }
}
