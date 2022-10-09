export class Background {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    render(ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, this.width, this.height)
    }
}