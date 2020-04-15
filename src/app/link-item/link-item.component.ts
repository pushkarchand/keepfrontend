import { Component, OnInit,Input } from '@angular/core';
import { LinkItem } from '../_models/item';
@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input() link:LinkItem;
  linkinput:string;
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
    this.linkinput=this.link.link;
    if(this.linkinput===''){
      this.isEditable=false;
    } else{
      this.isEditable=true;
    }
    
  }

  public setLink(){
    this.isEditable=true;
    this.link.link=this.linkinput;
  }

}
