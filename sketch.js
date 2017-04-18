var worldMap;
var mapFactory;
var startScreen;
var mapSize;


const DEEPWATER = -1;
const WATER = 0;
const SAND = 1;
const GRASS = 2;
const MOUNTAIN = 3;
const ICE = 4;



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    startScreen = false;
    mapSize = 160;
    mapFactory = new MapFactory();

    init();
}

function draw() {

    background(30);
    if (!startScreen) {
        worldMap.display();
    }

}

function init() {
    worldMap = mapFactory.createMap(mapSize);
}

function keyTyped() {
    init();
}

function mousePressed() {
    init();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    worldMap.updateTileSize();
}
