

Webcam.set({
    width: 350,
    height: 350,
    image_format:'png',
    image_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function img_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>'
    })
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_oteeP5Hn/model.json',modelloaded);

function modelloaded() {
console.log("model has loaded👍");
}

function check() {
  img=document.getElementById("captured_img");
  classifier.classify(img, gotresult)  ;
}

function gotresult(result, error) {
    if(error) {
        console.error(error);
    
    }
    else {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;

        if(result[0].label=="Good") {
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }

        if(result[0].label=="Thumbs up") {
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }

        if(result[0].label=="Peace") {
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
    }
}