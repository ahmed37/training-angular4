import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent{
pageTitle :string ='Product List';
imageWidth:number= 50;
imageMargin:number= 2;
showImage:boolean=false;
errorMessage :string;
_listFilter:string;
get listFilter():string{
  return this._listFilter;  
}
 set listFilter(value:string){
     this._listFilter=value;
     this.filtredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
 }

filtredProducts: IProduct[];
products: IProduct[] =[];

constructor(private _productService:ProductService){

}
performFilter(filtreBy: string):IProduct[]{
    filtreBy=filtreBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filtreBy)!==-1);
}
toggleImage(): void{
    this.showImage=!this.showImage;
}
onRatingClicked(message:string) :void{
this.pageTitle= 'Product List : '+ message;
}
ngOnInit():void{
    this._productService.getProducts().subscribe(products=>{
        this.products=products;
        this.filtredProducts=this.products;
    },
    error=>this.errorMessage=<any>error);
    
}
}