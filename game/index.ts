import { Player } from "./entities/Player"
import { Background } from "./entities/Background";

export class Game {
    canvas;
    context;
    player;
    background;
    
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.canvas.width = 64 * 16
        this.canvas.height = 64 * 9

        this.background = new Background(this.canvas.width, this.canvas.height);
        this.player = new Player();
        
        this.loop()
    }

    loop() {
        window.requestAnimationFrame(() => this.loop())
        this.render()
        this.player.update(this.background.height)
    }
    
    render() {
        this.background.render(this.context)
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
