// LESSON 1: scope, object, <canvas>
const game = {
    canvas: undefined,

    player: {
        x: 10,
        y: 10,

        move: function (direction) {
            switch (direction) {
                case "left":
                    this.x -= 10;
                    break;
                case "right":
                    this.x += 10;
                    break;
                case "up":
                    this.y -= 10;
                    break;
                case "down":
                    this.y += 10;
                    break;
            }
        },
    },

    draw: function () {
        this.context.fillStyle = "#006400";
        this.context.fillRect(this.player.x, this.player.y, 10, 10);
    },

    /**
     *
     * @param {KeyboardEvent} event
     */
    handleKeyEvent(event) {
        switch (event.code) {
            // Move Left
            case 37: // Left Arrow
            case 65: // A
                this.player.move("left");
                break;

            // Move Right
            case 39: // Right Arrow
            case 68: // D
                this.player.move("right");

                break;

            // Move Up
            case 38: // Up Arrow
            case 87: // W
                this.player.move("up");
                break;

            // Move Down
            case 40: // Down Arrow
            case 83: // S
                this.player.move("down");
                break;
        }
        this.draw();
    },

    setup: function () {
        this.canvas = document.getElementById("invader-game");
        this.context = this.canvas.getContext("2d");

        document.addEventListener("keyup", function (event) {
            this.handleKeyEvent(event);
        });

        this.draw();
    },
};

window.addEventListener("load", function () {
    game.setup();
});
