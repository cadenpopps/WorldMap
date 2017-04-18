function Tile(_tileType, _x, _y, _exactVal) {

    var tileType = _tileType;
    var exactVal = constrain(_exactVal * 350, 50, 255);
    var x = _x;
    var y = _y;

    this.display = function(tileSize) {
        switch (tileType) {
            case DEEPWATER:
                fill(0, 20, 200, exactVal);
                break
            case WATER:
                fill(0, 0, 255, exactVal);
                break;
            case SAND:
                fill(200, 150, 100, exactVal);
                break;
            case GRASS:
                fill(0, 150, 20, exactVal);
                break;
            case MOUNTAIN:
                fill(100, 70, 103, exactVal);
                break;
            case ICE:
                fill(200, 170, 230, exactVal);
                break;
        }
        rect(x * tileSize, y * tileSize, tileSize, tileSize);
    };
}