import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public static showMsg = false;

  public classRef = NavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  close()
  {
    NavComponent.showMsg = false;
  }

}
