# Fingerpose - Detection

Finger gesture classifier for multiple hand landmarks detected by [MediaPipe Handpose Detection](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection). It detects gestures like "Victory" ✌️ or "Thumbs Up" 👍 from both individual hands inside a source image or video stream.

## How it works

### Gesture detection works in three steps:

    1. Detect the hands' landmarks inside the video picture
    2. Estimating the direction and curl of each individual finger
    3. Comparing the result to a set of gesture descriptions

## Usage

`npm i` => install dependencies;
`npm start` => Start a local server;
