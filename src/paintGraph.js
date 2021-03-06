const chart = d3.select('.chart');

const width = +chart.attr('width');
const height = +chart.attr('height');

const paintGraph = data => {
    console.log(data)
    d3.select('.chart').selectAll('g').remove();
    const xValue = d => +d['births'];
    const yValue = d => +d.year;
    const margin = { top: 20, right: 50, bottom: 20, left: 70 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth]);
    console.log(d3.max(data, xValue))    
    const yScale = d3.scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.15);

    const g = chart.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

    g.append('g').call(d3.axisLeft(yScale))
    g.append('g').call(d3.axisBottom(xScale))
        .attr('transform', `translate(0,${innerHeight})`);

    g.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth())
        .attr('class', 'bar')
        .append('title')
            .text(d => `Births in ${d.year}: ${d.births}`);
}