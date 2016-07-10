d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});


var vis = d3.select("#graph")
            .append("svg")
.attr("width", 200).attr("height", 200); // width and height of the svg graph area

var nodes = [
    {x: 10, y: 50},
    {x: 70, y: 10},
    {x: 140, y: 50},
    {x: 100, y: 11}
  ]

vis.selectAll("circle.nodes")
   .data(nodes) // the data is from the variable nodes, which we defined above
   .enter()
   .append("svg:circle")
   .attr("cx", function(d) { return d.x; })
   .attr("cy", function(d) { return d.y; })
   .attr("r", "10px") // the radius of the nodes in pixels
   .attr("fill", "blue") // giving the nodes a fill color of blue
