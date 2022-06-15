import { makeAutoObservable } from "mobx";

class ProductStore{

    firstName = "Kali02"
    lastName = "OOOO"
    products = [
        {
            name: "Banana",
            price: 145
        },
        {
            name: "Fork",
            price: 100
        }]

    constructor(){
        makeAutoObservable(this)
    }

    get showName(){
        return this.lastName + " " + this.firstName
    }

    //method
    setProducts(products){
        this.products = products
    }

    setLastName(lastName){
        this.lastName = lastName
    }
}

export default new ProductStore();