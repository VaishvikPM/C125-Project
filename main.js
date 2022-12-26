noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Initialized!');
}
function draw(){
    background('#00ffff');
    document.getElementById("font_size").innerHTML="Font of the text will be"+difference+"px";
    fill('#09e896');
    textSize(difference);
    text('Vaishvik',50,400);
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY"+noseY);


    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftWristX = " + leftwristX + " rightWristX = "+ rightwristX + " difference = " + difference);
}
}
