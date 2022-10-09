const map1 = `
+..............+
++++...........+
+..+...........+
+..+...........+
+..+++++.......+
+......+++.....+
+..............+
+...........++++
++++++++++++++++
`;

class CollisionBlock {
    position;
    width: number;
    height: number
    
    constructor({position}) {
        this.position = position;
        this.width = 64;
        this.height = 64;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const collisionBlockList: CollisionBlock[] = [];