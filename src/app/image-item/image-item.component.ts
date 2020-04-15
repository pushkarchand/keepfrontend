import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ImageItem } from '../_models/item';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {
  @Input() image:ImageItem;
  constructor(private _itemService:ItemService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    console.log(files);
    this._itemService.uploadFile(files[0])
      .subscribe(response=>{
        this.image.url=response.data;
      })
  }

}
