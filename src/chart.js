// var margin = { top: 20, right: 20, bottom: 20, left: 20 }

// const test = d3.select('.chart');

// const width = +test.attr('width')
// const height = +test.attr('height')
// const radius = width / 2;

// // color range
// var color = d3.scaleOrdinal()
//     .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2"]);

// // pie chart arc. Need to create arcs before generating pie
// var arc = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(0);

// var labelArc = d3.arc()
//     .outerRadius(radius - 40)
//     .innerRadius(radius - 40);

// var pie = d3.pie()
//     .sort(null)
//     .value(d => { return d.count; });

// let chart = d3.select(".chart")
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// d3.csv("src/data.csv", function (error, data) {
//     if (error) throw error;

//     data.forEach(d => {
//         d.count = +d.count;
//         d.train = d.train;
//     })

//     let g = chart.selectAll(".arc")
//         .data(pie(data))
//         .enter().append("g")
//         .attr("class", "arc");

//     g.append("path")
//         .attr("d", arc)
//         .style("fill", function (d) { return color(d.data.train); })
//         .transition()
//         .ease(d3.easeLinear)
//         .duration(2000)
//         .attrTween("d", tweenPie);

//     g.append("text")
//         .transition()
//         .ease(d3.easeLinear)
//         .duration(2000)
//         .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
//         .attr("dy", ".35em")
//         .text(function (d) { return d.data.train; });
// });

// function tweenPie(b) {
//     b.innerRadius = 0;
//     var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
//     return function (t) { return arc(i(t)); };
// }

var parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y-%m"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

const usa = {};

d3.csv("src/data.csv").then(data => {
    console.log(data);

    data.forEach((datum) => {
        datum.stateFIPSCode = datum["State FIPS Code"];

        usa[datum.stateFIPSCode] = datum;
    })
})

