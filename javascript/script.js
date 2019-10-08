let numLines = 100
let values = []

// "loop variables"
let index = 0
let j = 0

function setup() {
  var myCanvas = createCanvas(1000, 500)
  myCanvas.parent("canvas")
  background(255, 0, 200)
  // frameRate(15);

  for (let i = 0; i < width; i++) {
    values[i] = random(height)
  }
}


function draw() {
  background(0, 0, 0)

  stroke(155)
  strokeWeight(4)
  for (let i = 0; i < values.length; i++) {
    line(i, height, i, height - values[i])
    //ellipse(i, height, i, height - values[i])
  }

  // sorting methods

  bubbleSort();
  //insertionSort();
}

function bubbleSort() {
  for (j = 0; j < values.length - index - 1; j++) {

    let a = values[j]
    let b = values[j + 1]

    if (a > b) {
      swap(values, j, j + 1)
    }
  }
}


// swaps two items in an array
// helper function for bubbleSort
function swap(values, i, j) {

  let temp = values[i]
  values[i] = values[j]
  values[j] = temp;

}

// insertion sort algorithm
function insertionSort() {
  i = 1
  let j = index - 1
  let tmp = values[index]

  while (j >= 0 && values[j] > tmp) {
    values[j + 1] = values[j]
    j--
  }
  values[j + 1] = tmp

  if (index < values.length - 1) {
    index++
  }
}
