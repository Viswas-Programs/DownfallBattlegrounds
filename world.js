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
        var pendingLoot = []
        for (const loot of this.loot) {
            if (discardLoot.indexOf(loot.id)) pendingLoot.push(loot.id)
        }
        this.loot = pending;
    }
    addPlayer(id: string;) {
        if (id.length > 4) return
        this.players.push(id)
    }
    removePlayer(id: string) {
        var pendingPlayer = [];
        for (const player of this.players) {
            if (this.players.indexOf(id)) pendingPlayer.push(player.id)
        }
        this.players = pendingPlayer;
    }

}