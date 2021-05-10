class Mkulima{
    constructor(farms,grocery,product){
        this.farms=[];
        this.grocery=[];
        this.product=[];
    }


 addfarm(farmId,name,farmer,phoneNumber,address){
 this.farms.push({farmId,name,farmer,phoneNumber,address})

 return this.farms
 }
 removeFarm (farmId){
    this.farms.shift(farmId)
    return this.farms
 }
    updateFarm(farmId,name,farmer,phoneNumber,address){
     var pFarm=this.farms.find(pFarm=>pFarm.address=="cyonga")
         pFarm={
           farmId:farmId,
           name:name,
           farmer:farmer,
           phoneNumber:phoneNumber,
           address:address

          
        }
        return pFarm
    }
    getFarm(farmId){
      var ppFarm=this.farms.find(ppFarm=>ppFarm.farmId=="t564")
      return ppFarm
    }
    addProduct(productId,productName,price){

        var product={
            productId:productId,
            productName:productName,
            price:price,
        }
        this.product.push(product);
        return this.product
    }
    removeProduct(productId){
        this.product.shift(productId);
        return this.product
    }
    updateProduct(productId,productName,price){
        let oneProduct=this.product.find(oneProduct=>oneProduct.productId==123)
        return oneProduct
    }
    getProduct(productId){
        let twoProduct=this.product.find(twoProduct=>twoProduct.productId==900)
        return productId
    }
    printProducts(){
        for(let items of this.product){
            console.log(`${items.productName},${items.price}`)
        }
    }
    calcalateOrderCost(quantity,productId){
        var orderCost=this.product.find(orderCost=>orderCost.productId==productId)
        return productId*quantity
    }
    

    

 
 
}
var mkulima=new Mkulima([],[],[]);
console.log(mkulima.addfarm("t564","Kabatesi","Ana",7888123,"cyonga",));
console.log(mkulima.addfarm("t987","Kabat","Anatasi",73456578,"nyonga",));
console.log(mkulima.addfarm("t123","Shuti","Amanda",78003079,'Gitega'));



console.log(mkulima.removeFarm("t564"));
console.log(mkulima.getFarm("t564"));


console.log(mkulima.addProduct(900,"veagatable",2001));
console.log(mkulima.addProduct(123,"Cabage",3042));
console.log(mkulima.addProduct(1423,"Tomato",230));


console.log(mkulima.removeProduct(900));
console.log(mkulima.updateProduct(1234,"Onion",200));
console.log(mkulima.getProduct(900));
mkulima.printProducts();
console.log(mkulima.calcalateOrderCost(900,3));








