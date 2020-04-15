import { Component, OnInit, Input } from '@angular/core';
import { TextItem } from '../_models/item';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.scss']
})
export class TextItemComponent implements OnInit {
@Input() text:TextItem;
  constructor() { }

  ngOnInit() {
  }

}
