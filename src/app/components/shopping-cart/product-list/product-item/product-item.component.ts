import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem;

  constructor(
    private msg: MessengerService,
    private router: Router
    ) {}

  ngOnInit(): void {
    if(this.productItem.img_url === ""){
      this.productItem.img_url = 'https://basingers.com/public/images/no-product-image.png'
    }
    if(this.productItem.description === ""){
      this.productItem.description = "There is unfortunately no description for " + this.productItem.title;
    }
  }

  handleAddToCart()
  {
    this.msg.sendMsg(this.productItem);
  }

  goToCatalogue(){
    this.router.navigate(['catalogue']);
  }

}
