function WorldMap(_tiles) {

    var tiles = _tiles;
    var tileSize;
    if (width <= height) {
        tileSize = floor((width - 80) / tiles.length);
    }
    else {
        tileSize = floor((height - 80) / tiles.length);
    }

    this.updateTileSize = function() {
        if (width <= height) {
            tileSize = floor((width - 80) / tiles.length);
        }
        else {
            tileSize = floor((height - 80) / tiles.length);
        }
    };

    this.display = function() {
        push();
        if (width <= height) {
            translate(100, height / (tileSize * tiles.length) / 2);
        }
        else {
            translate(width / 2 - (tileSize * tiles.length) / 2, 40);

        }
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[i].length; j++) {
                tiles[i][j].display(tileSize);
            }
        }
        pop();
    };

}