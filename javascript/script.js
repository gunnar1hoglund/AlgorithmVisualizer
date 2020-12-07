/* 
  TODO: 
    - Refresh canvas after it's sorted and another algorithm is selected
    - Add more algorithm options
    - Refine design, perhaps a dropdown isn't the best design option
    - Add options for random, nearly sorted, reversed, and few unique canvas
  
*/

let values = []
let states = []
let w = 10
// "loop variables"
let index = 0
let j = 0
let bool = false
// should add a boolean for when the list is sorted


function setup() {
  var myCanvas = createCanvas(1000, 500)
  myCanvas.parent("canvas")
  background(0, 0, 0)
  frameRate(20);
  values = new Array(floor(width / w))

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height)
    states[i] = -1
    //values[i] = noise(i / 100) * height

  }
}

function draw() {

  // colors
  background(0, 0, 0)
  fill(155)
  stroke(0)

  // picking random heights for the bars
  generateBars()

  // if divSelect == a certain algorithm 

  let e = document.getElementById("divSelect") // getting the select element
  let value = e.options[e.selectedIndex].value


  // picking which sorting method to be used
  switch (value) {
    case "Insertion": insertionSort()
      break
    case "Bubble": bubbleSort()
      break
  }

  

}

function generateBars() {
  for (let i = 0; i < values.length; i++) {

    rect(i * w, height - values[i], w, values[i])

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

// bubble sort algorithm
function bubbleSort() {
  for (j = 0; j < values.length - index - 1; j++) {

    let a = values[j]
    let b = values[j + 1]

    if (a > b) {
      swap(values, j, j + 1)
    }
  }
}

