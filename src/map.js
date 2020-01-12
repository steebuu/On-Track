//https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json
//https://d3js.org/us-10m.v1.json

var svg = d3.select(".map");

var path = d3.geoPath();

const projection = d3.geoMercator();
const pathGenerator = d3.geoPath().projection(projection);

const g = svg.append('g');

// svg.call(d3.zoom().on('zoom', () => {
//     svg.attr('transform', d3.event.transform);
// }))

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json").then(us => {
    // console.log(us)
    const states = topojson.feature(us, us.objects.states);
    console.log(states)
    svg.selectAll('path').data(states.features)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'state')
        .on('click', d => paintGraph())
        .append('title')
            .text(d => d.properties.name);

    svg.append('path')
        .attr('class', 'state-borders')
        .attr("d", path(topojson.mesh(us, us.objects.states, function (a, b) { return a !== b; })));
})

// d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json", function(error, us) {
//   if (error) throw error;
//         console.log(us.objects)

//         svg.append("g")
//             .selectAll("path")
//             .data(topojson.feature(us, us.objects.states).features)
//             .enter().append("path")
//             .attr("d", path)
//             .attr("class", "states"); 

//         svg.append("path")
//             .attr("class", "state-borders")
//             .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
//   });