import { Component, OnInit, Input } from '@angular/core';
import { LoactionItem } from '../_models/item';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss']
})
export class LocationItemComponent implements OnInit {
@Input() location:LoactionItem;
  constructor() { }

  ngOnInit() {
  }

}
