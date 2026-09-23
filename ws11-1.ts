class MenuItem{
    constructor(private _name:string,private _price:number,private _category:string){}
    get name(): string{
        return this._name;
    }
    get price(): number{
        return this._price;
    }
    getMenuInfo(): string{
        return `${this._name} - ${this._price} - ${this._category}`;
    }
}

class Restaurant{
    constructor(private name:string ,private menuItem: MenuItem[]) {}
    showMenu(): void{
        console.log(`Menu ของร้าน ${this.name}: `);
        this.menuItem.forEach(item =>{
            console.log(item.getMenuInfo());
        })
    }
    calculateNetPrice(total:number):number{
        const rate = 0.01;
        if(total>500){
            return total*(1-rate);
        }else{
            return total;
        }
    }
}

class Customer{
    constructor(private name:string) {}
    placeOrder(rest:Restaurant,order:Order):void {
        const total = order.calculateTotal();
        const netPrice = rest.calculateNetPrice(total);
        console.log(`${this.name} สั่ง order : `)
        order.showOrder();
        console.log(`ราคาสุทธิ: ${netPrice}`)
    }
}

class Order{
    constructor(
        private items: {item: MenuItem, quantity: number} [] = []) {}
        
    showOrder():void{
        console.log("รายการคำสั่งซื้อ: ");
        this.items.forEach(({item,quantity})=> {
            console.log(`${quantity} x ${item.getMenuInfo()} = ${(item.price * quantity).toFixed(2)}`);
        })
    }
    calculateTotal():number{
        let total = 0;
        for( const {item,quantity}of this.items){
            total += item.price * quantity;
        }
        return total;
    }
}

const menu1 = new MenuItem("Pizza",199,"Italian");
const menu2 = new MenuItem("Burger",99,"Europe");
const menu3 = new MenuItem("Steak",259,"Europe");
const restaurant1 = new Restaurant("Pizza Company",[menu1,menu2,menu3]);
restaurant1.showMenu();

const customer1 = new Customer("สันหมู");
const order1 = new Order([
    {item: menu1,quantity:2},
    {item:menu2,quantity:3}
]);
customer1.placeOrder(restaurant1,order1);