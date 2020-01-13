//https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json
//https://d3js.org/us-10m.v1.json

var svg = d3.select(".map");

var path = d3.geoPath();

const projection = d3.geoMercator();
const pathGenerator = d3.geoPath().projection(projection);

const g = svg.append('g');

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json").then(us => {

    const states = topojson.feature(us, us.objects.states);

    svg.selectAll('path').data(states.features)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'state')
        .on('click', d => parseData(d.id))
        .append('title')
            .text(d => d.properties.name);

    svg.append('path')
        .attr('class', 'state-borders')
        .attr("d", path(topojson.mesh(us, us.objects.states, function (a, b) { return a !== b; })));
})
