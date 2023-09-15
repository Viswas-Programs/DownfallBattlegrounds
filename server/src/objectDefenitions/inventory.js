export class Inventory {
    this.backpackLevel: number;
this.armourLevel: number;
this.scopeLevel: number;
this.helmetLevel: number;
this.bandageAmount: number;
this.pillAmount: number;
this.coffeeAmount: number;
this.medkitAmount: number;
this.maxAmountBandage: number = this.backpackLevel * 5; 
this.maxAmountPill: number = this.backpackLevel * 5;
this.maxAmountCoffee: number = this.backpackLevel * 5;
this.maxAmountMedkit: number = this.backpackLevel * 2;
this.ammoStorage: Map = { "9mm": "0", "12 gauge": "0", "7.62mm": "0", "5.56mm": "0" }

}

export class MinInventory {
}