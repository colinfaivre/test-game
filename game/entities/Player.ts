export class Player {
    position;
    sides;
    width;
    height;
    color;
    velocity;
    gravity;
    
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }

        this.width = 50;
        this.height = 50;
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.color = 'red';
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.gravity = 1
    }

    render(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(bottomCollision) {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height

        if (this.sides.bottom + this.velocity.y < bottomCollision) {
            this.velocity.y += this.gravity;
        } else this.velocity.y = 0
    }

    goUp() {
        if(this.velocity.y === 0) this.velocity.y -= 20;
    }

    goLeft() {
        this.velocity.x = -4;
    }

    goRight() {
        this.velocity.x = 4;
    }

    stopGoingLeft() {
        if (this.velocity.x < 0) this.velocity.x = 0
    }

    stopGoingRight() {
        if (this.velocity.x > 0) this.velocity.x = 0
    }
}