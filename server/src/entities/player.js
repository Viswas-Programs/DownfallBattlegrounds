import {Inventory, MinInventory } from "../objectDefenitions/inventory"
export class Player {
this.username: string;
this.id: number;
this.zIndex: Number = 9;
this.skin: string;
this.graveImage: string;
this.inventory: Inventory || MinInventory;
this.gunReloadTicks: number = 0;
this.healItem: string || undefined = undefined;
this.canAttack: boolean = false;
this.scope: number = 1;
this.boost: number = 1;
this.lastHoldingWeapon: string = "fists";
this.healTicks: number = 0;
this.canInteract: boolean = false;
}