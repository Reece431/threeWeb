import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";

//---------classic js
const video = document.querySelector('.video');
const constraints = {
    audio: false,
    video: {
        width: {min: 1024, ideal: 1200, max: 1920},
        height: {min: 576, ideal: 720, max: 1080}
    }
}

const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
      const video = document.querySelector('.video')

    // Check data is available
    if (
      typeof video !== "undefined" &&
      video !== null &&
      video.readyState === 4
    ) {
      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
    //   drawHand(hand);
    }
  };

async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        video.stream = stream;
        runHandpose();
    } catch(err) {
        console.log(err)
    }
}

startWebcam()