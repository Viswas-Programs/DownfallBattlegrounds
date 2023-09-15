//world to store all the stuff
export class World {
    players: [] = [];
    obstacles: [] = [];
    loot: [] = [];
    entities: [] = [];
    layers: number = 0;

    constructor()
    addLoot(item) {
        this.loot.push(item)
    }
    removeLoot(discardLoot[]) {
        var pendingLoot = this.loot;
        for (const loot of this.loot) {
            if (!discardLoot.includes(loot.id)) pendingLoot.push(loot.id)
        }
        this.loot = pending;
    }

}