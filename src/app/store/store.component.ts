import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../_services';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
  } from "@angular/forms";
import { Store } from '../_models/store';
import { AlertService } from '../_services';
import { Router } from '@angular/router';

@Component({ 
        selector:'app-product',
        templateUrl: 'store.component.html',
        styleUrls:['./store.component.scss'] })
export class StoreComponent implements OnInit {
    @ViewChild("storemodal", { static: false }) addStore: any;
    public storeForm: FormGroup;
    public listOfStores:Store[];
    public storeName='';
    public storeIdList:string[];
    constructor(private _storeService:StoreService,
                private modalService: NgbModal,
                private fb: FormBuilder,
                private config: NgbModalConfig,
                private router:Router,
                private _alertService:AlertService) {
                    this.config.backdrop = "static";
                    this.config.keyboard = false;
    }

    ngOnInit() {
        this.storeIdList=[];
        this.listOfStores=[];
        this.intializeStore();
        this.enumerateStores();
    }

    private enumerateStores():void{
        this._storeService.enumerateStores()
        .subscribe(products=>{
            console.log(products);
            this.listOfStores=products;
        })
    }

    private intializeStore(): void {
        this.storeForm = this.fb.group({
            name: new FormControl('',Validators.compose([Validators.required]))
        });
      } // private intializeStore(): void

    public openStoreForm():void {
        this.modalService.open(this.addStore, { centered: true });
    }// public openStoreForm():void

    public addNewStore():void{
        console.log(this.storeForm.value);
        const newStore=new Store('',this.storeForm.value.name,[]);
        this._storeService.createNewStore(newStore)
        .subscribe(productResponse=>{
                this._alertService.success('successfully created product',true);
                this.clearMessage();
                this.modalService.dismissAll();
                this.enumerateStores();
                this.intializeStore();
        },(err)=>{
            this._alertService.error('Error while creating product',true);
            this.clearMessage();
            this.modalService.dismissAll();
        })
    }

    private clearMessage(){
        setTimeout(()=>{
            this._alertService.clear();
        },3000);
    }

    public getStoreDetails(argId):void{
        this.router.navigate(['/store/',argId]);
    }// public getStoreDetails(argId):void

    public addStoreToDeleteList(argEvent:any,argId:string):void{
        if(argEvent.currentTarget.checked){
            this.storeIdList.push(argId);
        }
        else{
            const index=this.storeIdList.indexOf(argId);
            if(index!==-1){
                this.storeIdList.splice(index,1);
            }
        }
    }// public addStoreToDeleteList(argEvent:any,argId:string):void

    public deleteStore(argId:string):void{
        this._storeService.deleteStores(argId)
        .subscribe(response=>{
            this._alertService.success('Sucessfully deleted product',true);
            this.enumerateStores();
        })
    }//public deleteStore(argId:string):void

}