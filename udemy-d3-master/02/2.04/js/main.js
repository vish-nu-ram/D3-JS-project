/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

const data = [250,12,34,76]
const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

svg.append("circle")
  .attr("cx", (data,i)=> ((i*10)+50))
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "red")
