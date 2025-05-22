let mSlider , cSlider;

let m=1 , c=0;
let targetM = 1 ,targetC = 0;

function setup()
{
    const canvas = createCanvas(600,400);
    canvas.parent(document.body);
    mSlider = select('#mSlider');
    cSlider = select('#cSlider');

    mSlider.input(updateValues);
    cSlider.input(updateValues);

    updateValues();
    
}
function updateValues() {
  targetM = parseFloat(mSlider.value());
  targetC = parseFloat(cSlider.value());
  select('#mValue').html(targetM);
  select('#cValue').html(targetC);
}

function drawAxes() {
  stroke(180);
  strokeWeight(1);
  line(0, height / 2, width, height / 2); // X-axis
  line(width / 2, 0, width / 2, height); // Y-axis
}

function draw() {
  background(255);
  drawAxes();

//FOR THE SMOOTHING ANIMATION OF THE GRAPH AND OTHER STUFF
  m = lerp(m, targetM, 0.1);
  c = lerp(c, targetC, 0.1);

  // DISPLAY OF THE CURRENT EQUATION 

  let eq = `y = ${m.toFixed(2)}x + ${c.toFixed(2)}`;
  select('#equationDisplay').html(`<h3>${eq}</h3>`);

  // DRAWING OF THE ANIMATED LINE 
  stroke(255, 0, 0);
  strokeWeight(2);

  let x1 = -width / 2;
  let x2 = width / 2;

  let y1 = m * (x1 - width / 2) + c;
  let y2 = m * (x2 - width / 2) + c;

  translate(width / 2, height / 2); // Move origin to center

  //stroke('#ff6347');
  line(x1, -y1, x2, -y2); // Inverted y-axis
}