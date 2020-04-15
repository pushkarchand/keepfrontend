import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { StoreService } from '../_services';
import { Store } from '../_models';
import { ItemType, Item, ImageItem, TextItem, LinkItem, LoactionItem } from '../_models/item';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  public storeDetails:Store;
  public documentType=ItemType;
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,private _storeService:StoreService,private _alertService:AlertService) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.params['id'];
    if(!id){
      this.router.navigate(['/'])
    }
    this.getStoreDetails(id);
  }


  private getStoreDetails(argId):void{
      this._storeService.getStoreDetails(argId)
      .subscribe(storeDetailsResponse=>{
        this.storeDetails=storeDetailsResponse;
      })
  }

  public addNewItem(argItemType:ItemType){
    console.log(argItemType);
    let newItem:Item;
    switch(argItemType){
      case ItemType.IMAGE:{
        const imageItem=new ImageItem('');
        newItem=new Item(ItemType.IMAGE,imageItem);
        this.storeDetails.items.push(newItem);
        break;
      }
      case ItemType.TEXT:{
        const textItem=new TextItem('');
        newItem=new Item(ItemType.TEXT,textItem);
        this.storeDetails.items.push(newItem);
        break;
      }
      case ItemType.LINK:{
        const linkIte=new LinkItem('');
        newItem=new Item(ItemType.LINK,linkIte);
        this.storeDetails.items.push(newItem);
        break;
      }
      case ItemType.LOACTION:{
        this._storeService.getPosition()
        .then(response=>{
          console.log(response);
          const loactionItem=new LoactionItem(response.lng,response.lat);
          newItem=new Item(ItemType.LOACTION,loactionItem);
          this.storeDetails.items.push(newItem);
        })
        .catch(error=>{
          newItem=new Item(ItemType.LOACTION,new LoactionItem(0,0));
          this.storeDetails.items.push(newItem);
        })
        break;
      } 
    }
  }


  public updateStore(){
    this._storeService.updateStore(this.storeDetails)
    .subscribe(storeResponse=>{
      console.log(storeResponse);
      this._alertService.success('Sucessfully updated the store',true);
    })
  }

  public deleteItem(argIndex):void{
    this.storeDetails.items.splice(argIndex,1);
  }

}
