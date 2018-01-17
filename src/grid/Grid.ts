import Vector2 from '../lib/core/math/Vector2';

export default class Grid extends Phaser.State {

    private xSize: number;
    private ySize: number;
    private graphics: any;

    constructor(xSize: number, ySize: number) {
        super();
        this.xSize = xSize;
        this.ySize = ySize;
    }
    create() {
    //7 * 14
    //98
        this.game.stage.backgroundColor = "0x7D4F9B";


        var graphics = this.game.add.graphics(0,0);

        var floorHeight = 0.8;
        graphics.beginFill(0x6b3582)
        graphics.drawRect(0, this.game.stage.height*floorHeight, this.game.stage.width, this.game.stage.height*(1-floorHeight));
        graphics.endFill();
    }   
    update() {
    }
    render() {
    }
}