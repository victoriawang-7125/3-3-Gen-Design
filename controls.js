// PAGE 3: controls.js - makes the sliders, color pickers and buttons.
let layersSlider;    // how many nested rectangles
let twistSlider;     // how much each rectangle is turned from the last
let speedSlider;     // how fast everything spins
let strokeSlider;    // how thick the outlines are
let satCountSlider;  // how many small orbiting rectangles
let satSizeSlider;   // how big the small orbiting rectangles are
let colorA;          // first color
let colorB;          // second color
let paused = false;  // true = animation frozen


// Puts a text label above a control and places both in the panel
function addControl(label, element) {
  const wrap = createDiv().addClass('ctl').parent('panel'); 
  createSpan(label).parent(wrap);                           
  element.parent(wrap);                                    
}

// Controls
function makeControls() {
  layersSlider   = createSlider(3, 40, 18, 1);
  twistSlider    = createSlider(0, 20, 6, 0.5);
  speedSlider    = createSlider(0, 3, 0.8, 0.05);
  strokeSlider   = createSlider(0.5, 6, 1.2, 0.1);
  satCountSlider = createSlider(0, 24, 12, 1);
  satSizeSlider  = createSlider(0.5, 3, 1, 0.1);
  colorA = createColorPicker('#00f0ff');
  colorB = createColorPicker('#ff2bd6');

  // Show each one on the page with a label
  addControl('Layers', layersSlider);
  addControl('Twist', twistSlider);
  addControl('Speed', speedSlider);
  addControl('Stroke', strokeSlider);
  addControl('Orbiters', satCountSlider);
  addControl('Orbiter size', satSizeSlider);
  addControl('Color A', colorA);
  addControl('Color B', colorB);

  // Keeps buttons in their own row
  const btns = createDiv().id('btns').parent('panel');

  // mousePressed(...) "when clicked, run this function"
  createButton('Pause / Play').parent(btns).mousePressed(togglePause);
  createButton('Export PNG').parent(btns).mousePressed(exportImage);
}

// togglePause()
// Flips paused between true and false.
function togglePause() {
  paused = !paused;   
}
