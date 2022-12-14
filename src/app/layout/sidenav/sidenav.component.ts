import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild("sideBar")
  public sidecomp: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  onSideToggle() {
    this.sidecomp.toggle();
  }

}
