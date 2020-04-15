export class Item{
    constructor(public itemType:ItemType,
                public data:Object){
    }
}

export enum ItemType{
    IMAGE='IMAGE',
    LOACTION='LOACTION',
    LINK='LINK',
    TEXT='TEXT',
}

export class ImageItem{
    constructor(public url:string){
    }
}

export class LoactionItem{
    constructor(public longitude:number,public latitude:number){
    }
}

export class LinkItem{
    constructor(public link:string){
    }
}

export class TextItem{
    constructor(public data:string){
    }
}