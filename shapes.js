// PAGE 4: shapes.js - the drawing code.

// Draws a stack of rectangles, each smaller and more twisted than
// the one before. "t" is the clock that makes things spin.
function drawLayers(t) {
  const n = layersSlider.value();      // read the slider: how many layers
  const twist = twistSlider.value();   // read the slider: how much twist
  const weight = strokeSlider.value(); // read the slider: thickness of stroke
  const a = color(colorA.value());     // turn the picker's text into a color
  const b = color(colorB.value());

  // Loop that repeats code per layer
  for (let i = 0; i < n; i++) {
    const k = i / (n - 1 || 1);                  // goes from 0 (first) to 1 (last)
    const dir = i % 2 === 0 ? 1 : -1;            // % gives the remainder: even layers spin one way, odd the other
    const size = map(i, 0, n - 1, 520, 40);      // big on the outside, small in the middle
    const c = lerpColor(a, b, k);                // blend between color A and B

    push();                                      // SAVE the drawing settings
    rotate(i * twist + t * dir * (0.5 + k));     // turn this layer
    noFill();                                    // outline only
    stroke(c);                                   // outline color
    strokeWeight(i % 5 === 0 ? weight * 2.5 : weight);  // every 5th layer is bolder
    drawingContext.shadowBlur = 5;               // faint glow
    drawingContext.shadowColor = c.toString();
    rect(0, 0, size, size * 0.62, 4);            // the rectangle (x, y, width, height, corner)

    // every 3rd layer also gets a faint filled core
    if (i % 3 === 0) {
      c.setAlpha(40);                            // make the color see-through
      fill(c);
      rect(0, 0, size * 0.5, size * 0.3);
    }
    pop();                                       // RESTORE the settings (so layers don't affect each other)
  }
  drawingContext.shadowBlur = 0;                 // turn the glow off
}

// Draws small rectangles in a ring, each one also spinning itself.
function drawOrbiters(t) {
  const count = satCountSlider.value();  // how many
  const sz = satSizeSlider.value();      // how big
  const a = color(colorA.value());
  const b = color(colorB.value());

  for (let j = 0; j < count; j++) {
    const c = lerpColor(a, b, j / count);

    push();
    rotate(j * (360 / count) - t * 0.6);   // spread evenly around the circle, slowly orbiting
    translate(250, 0);                     // move out from the center to the ring
    rotate(t * 2 * (j % 2 === 0 ? 1 : -1)); // spin in place (alternating direction)
    fill(c);
    noStroke();
    drawingContext.shadowBlur = 6;
    drawingContext.shadowColor = c.toString();
    rect(0, 0, 16 * sz, 6 * sz);           // the small rectangle
    pop();
  }
  drawingContext.shadowBlur = 0;
}
