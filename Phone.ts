export default class Phone{

    battery: number
    isOn: boolean
    brand: string

    constructor(brand:string){
        this.brand = brand
        this.battery = 100
        this.isOn = false
    }

    getBrand(){
        return this.brand
    }
    setBattery(battery: number){
        this.battery = battery
    }
    setOn(isOn:boolean){
        this.isOn = isOn
    }

}