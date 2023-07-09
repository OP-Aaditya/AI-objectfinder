video="";
input="";
objects=[];

function setup(){
    canvas = createCanvas( 480 , 380 );
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480 , 380);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML= "Status: Object Detecting";
    input = document.getElementById("input").value;
    video.stop();
    objectDetector.detect(gotResults);
    if(objects[i].label == input){
        document.getElementById("status").innerHTML="Status : Object Detected";

    }

    
}
function modelLoaded(){
    console.log("ModelLoaded!!!");
    status = true;
}
function draw(){
    img(video , 0 ,0 , 480 , 380 );
    if(status !=""){
        for(i=0;i<objects.length;i++){
            fill("#ff0000");
            percent = results[i].confidence*100;
            Text(results[i].label+""+percent+"%",results[i].x+15,results[i].y+15);
            nofill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }

    }
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function speak(){
    var synth = window.speechSynthesis
    speak_data = "object found"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}