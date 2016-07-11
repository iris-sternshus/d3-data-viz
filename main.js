// data
var nodes = [
    {x: 10, y: 50},
    {x: 70, y: 10},
    {x: 140, y: 50},
    {x: 100, y: 11}
  ]

var padding = 30;

var svg = d3.select("#graph")
            .append("svg")
            .attr("width", 500).attr("height", 500); // width and height of the svg graph area

// see : http://alignedleft.com/tutorials/d3/drawing-svgs for details


// creating scale variables
var xScale = d3.scaleLinear().domain([0, 200]).range([padding, 500 - padding * 2]);;
var yScale = d3.scaleLinear().domain([0, 200]).range([500 - padding, padding]);

var xAxis = d3.axisBottom().scale(xScale).tickValues([0, 50, 100, 150]);
var yAxis = d3.axisLeft().scale(yScale).tickValues([0, 50, 100, 150]);

// see: http://alignedleft.com/tutorials/d3/axes for details

svg.selectAll("circle")
   .data(nodes) // data from var nodes.
   .enter()
   .append("circle")
   .attr("cx", function(d) { return xScale(d.x); }) // circles need cx, cy, and r
   .attr("cy", function(d) { return yScale(d.y); }) 
   .attr("r", "10px") // the radius of the nodes in pixels
   .attr("fill", "blue") // giving the nodes a fill color of blue

   // see: http://alignedleft.com/tutorials/d3/making-a-scatterplot for details

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (500 - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);


