song="";

function preload(){
song=loadSound("music.mp3")
}

scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rigthWristY=0;
leftWristX=0;
leftWristY=0;

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("blue");
    circle(leftWristX,leftWristY,20)
    InNumberlefthwristY=Number(leftWristY);
                  remove_decimals=floor(InNumberlefthwristY);
    volume=remove_decimals/500;
    document.getElementById("volumen").innerHTML="volumen= "+volumen;
    song.setVolumen(volumen);
}

function play(){
    song.play();
    song.setVolumen(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("posenet esta inicialisado")
}

function gotPoses(){
    if(results.lent>0){                 
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
        rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}