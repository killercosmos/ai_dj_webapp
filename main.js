ong = "";

function preload() {
    song = loadSound("Dark Knights.mp3", "dmn.mp3", "Move On.mp3", "some1_drum_80bpm_ver.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {

    image(video,0, 0, 600, 500);
}

function play() {
    song.play();
}