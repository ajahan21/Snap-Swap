let constraints = {video: {facingMode: "user"}, audio: false};

//Define constants
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger");

function cameraStart() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      let track = stream.getTracks()[0];
      cameraView.srcObject = stream;

    })
    .catch(function (error) {
      console.error("Something is broken,", error);
    });
}

//taking pic when cameratrigger is tapped
cameraTrigger.onclick = function () {
  cameraSensor.width = cameraView.videoWidth;
  cameraSensor.height = cameraView.videoHeight;
  cameraSensor.getContext("2d").drawImage(cameraView,0 ,0);
  cameraOutput.src = cameraSensor.toDataURL("image/webp");
  cameraOutput.classList.add("taken");
}

//starts the video stream when windows loads
window.addEventListener("load", cameraStart, false);

