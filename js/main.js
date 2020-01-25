// write your javascript code here.
// feel free to change the preset attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// first visualization
let svg1 = d3.select('#vis1')
  .append("svg")
  .attr("preserveAspectRatio", "xMidYMid meet") // this will scale your visualization according to the size of the page.
  .style('background-color', '#ccc') // change the background color to white
  .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// second visualization
let svg2 = d3.select('#vis2')
  .append("svg")
  .attr("preserveAspectRatio", "xMidYMid meet") // this will scale your visualization according to the size of the page.
  .style('background-color', '#ccc') // change the background color to white
  .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))
