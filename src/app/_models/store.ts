import { Item } from './item';
export class Store{
    constructor(public id:string,
                public name:string,
                public items:Item[],
                public created_at:Date=new Date(),
                public updated_at:Date=new Date()){}
}