// LESSON 1: scope, object, <canvas>
const game = {
    canvas: undefined,

    player: {
        x: 10,
        y: 10
    },

    draw: function() {
        this.context.fillStyle = "#006400";
        this.context.fillRect(this.player.x, this.player.y, 10, 10);
    },
    
    setup: function() {
        this.canvas = document.getElementById('invader-game');
        this.context = this.canvas.getContext('2d');
        this.draw();
    }
}

window.addEventListener("load", function() {
    game.setup();
});

