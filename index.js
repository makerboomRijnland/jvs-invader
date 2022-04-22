// LESSON 1: scope, object, <canvas>
const game = {
    canvas: undefined,

    draw: function() {
        this.context.fillStyle = "#006400";
        this.context.fillRect(10, 10, 10, 10);
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

