noseX = 0;
noseY = 0;
function preload(){
    lip_filter = loadImage('https://i.postimg.cc/MpDQyB29/download-5-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPose)
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}

function draw(){
    image(video, 0, 0, 300,300);
    image(lip_filter, noseX, noseY, 40, 40);
}

function take_snapshot(){
    save('fliterImg.png')
}