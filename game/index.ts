import { Player } from "./entities/Player"
import { Map } from "./entities/Map";
import { map1Blueprint } from "./data/maps";

export class Game {
    canvas;
    context;
    player;
    map;
    
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.canvas.width = 64 * 16
        this.canvas.height = 64 * 9

        this.map = new Map(map1Blueprint);
        this.player = new Player();
        
        this.loop()
    }

    loop() {
        window.requestAnimationFrame(() => this.loop())
        this.render()
        this.player.update(this.map.height)
    }
    
    render() {
        this.map.render(this.context)
        this.player.render(this.context)
    }

    addKeydownEvent(key) {
        if (key === "ArrowUp") this.player.goUp();
        if (key === "ArrowLeft") this.player.goLeft();
        if (key === "ArrowRight") this.player.goRight()
    }
    addKeyupEvent(key) {
        if (key === "ArrowLeft") this.player.stopGoingLeft();
        if (key === "ArrowRight") this.player.stopGoingRight();
    }
}
