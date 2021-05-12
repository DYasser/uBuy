import { Component, OnInit } from '@angular/core';
import { CatalogueServiceService } from 'src/app/services/catalogue-service/catalogue-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  headers = ["id", "title", "author", "publisher", "genre", "language", "stock"];

  rows = [
  ]

  constructor( private catalogueService: CatalogueServiceService ) { }


  ngOnInit(): void {
    this.catalogueService.getAllBooks().subscribe( data => {
      for (let element of data.result) {
        this.rows.push(element);
      }
    });
  }


}
