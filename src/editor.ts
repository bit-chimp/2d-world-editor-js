import Grid from './grid/Grid';

class App {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "app", this);
    }

    private game : Phaser.Game
    private grid : Grid;
    private preload() {}

    private create() {
        this.grid = new Grid(10, 10);
        
        this
            .game
            .state
            .add("Grid", this.grid, true);

        var pauseKey = this
            .game
            .input
            .keyboard
            .addKey(Phaser.KeyCode.UP);

            pauseKey.onDown.add(()=>{console.log("PUASE KEY"), this.game})

        this.game.input.enabled = true;
        pauseKey.enabled = true;
        pauseKey
            .onDown
            .add(this.test, this);
    }

    test() {
        console.log("Pressed Key ");
    }

    private update() {}
}

var app = new App();
