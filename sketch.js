// PAGE 6: sketch.js - main file that runs animations

let t = 0;   // the clock. It goes up while the animation plays

// Picks a canvas size that fits the window (never above 600)
function fitSize() {
  return constrain(min(windowWidth - 32, windowHeight - 190), 220, 600);
}


// Runs ONE time at the start.
function setup() {
  const c = createCanvas(fitSize(), fitSize());  // make the drawing area
  c.parent('stage');                             // put it in the #stage box
  angleMode(DEGREES);                            // use degrees (0-360) for rotation
  rectMode(CENTER);                              // rectangles draw from their middle
  makeControls();                                // build sliders & buttons (controls.js)
}


// Runs OVER AND OVER (about 60 times a second). Each run is one frame.
function draw() {
  background(5, 7, 13);                  // wipe the screen so we can draw fresh

  if (!paused) {
    t += speedSlider.value();            // move the clock forward by the speed
  }

  translate(width / 2, height / 2);      // move (0,0) to the center of the canvas
  scale(width / 600);                    // shrink or grow the drawing to match canvas size

  drawLayers(t);                         // big rectangles   (shapes.js)
  drawOrbiters(t);                       // small rectangles (shapes.js)
}

// Resizes window whenever the browser window changes size
function windowResized() {
  resizeCanvas(fitSize(), fitSize());
}
