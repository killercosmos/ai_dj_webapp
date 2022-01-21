var song = "";
var song2 = "";

function preload() {
    song = loadSound("Dark Knights.mp3");
    song2 = loadSound("dmn.mp3");
}

var scoreLeftWrist = 0;
var scoreRightWrist = 0;

var LeftWristX = 0;
var RightWristX = 0;

var RightWristY = 0;
var LeftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on("poses", gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        scoreLeftWrist = results[0].pose.keypoint[9].score;
        scoreRightWrist = results[0].pose.keypoint[10].score;
        console.log("Lefwrist score = " + scoreLeftWrist + "Rightwrist score = " + scoreRightWrist);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X =" + LeftWristX + "Right wrist X =" + RightWristX);

        LeftWristY = results[0].pose.leftWrist.y;
        RightWristy = results[0].pose.rightWrist.y;
        console.log("Left Wrist y =" + LeftWristY + "Right wrist Y =" + RightWristY);

    }
}



function draw() {
    var status = "";

    image(video,0, 0, 600, 500);

    stroke(#FF0000);
    fill(#FF0000);

    status = song.isPlaying();

    if(scoreLeftWrist > 0.2){

        circle(LeftWristX, LeftWristY, 20);
        song2.stop();

        if(status = false ) {
            song.play();
        }

    }

}

function play() {
    song.play();
}