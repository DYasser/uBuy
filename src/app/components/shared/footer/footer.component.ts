import { Component, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/components/shared/nav/nav.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMsg(){
    NavComponent.showMsg = true;
  }

}
