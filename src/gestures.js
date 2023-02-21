const { GestureDescription, Finger, FingerCurl } = window.fp;

const RockGesture = new GestureDescription('rock'); // ✊️
const PaperGesture = new GestureDescription('paper'); // 🖐
const ScissorsGesture = new GestureDescription('scissors'); // ✌️
const HangLooseGesture = new GestureDescription('hangloose'); // 🤙
const RockAndRollGesture = new GestureDescription('rocknroll'); // 🤘


// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
    PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// Hangloose 🤙
//------------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
HangLooseGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HangLooseGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

// pinky: curled
//------------------------------------------------------------------------------
HangLooseGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
HangLooseGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.9);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    HangLooseGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    HangLooseGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// RockAndRoll 🤙
//------------------------------------------------------------------------------
// index and pinky finger: stretched out
RockAndRollGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RockAndRollGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// middle and ring finger: curled
for (let finger of [Finger.Middle, Finger.Ring]) {
    RockAndRollGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    RockAndRollGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


const gestures = [RockGesture, PaperGesture, ScissorsGesture, HangLooseGesture, RockAndRollGesture]

export { gestures }