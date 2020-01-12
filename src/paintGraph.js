const data = d3.csv("src/")

const paintGraph = (data) => {
    console.log(data)
    const chart = d3.select('.chart');
    const width = +chart.attr('width')
    const height = +chart.attr('height')
    const xValue = d => d["Median Household Income"];
    const yValue = d => d.name
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth])

    const yScale = d3.scaleBand()
        .domain(Object.keys(data).map(yValue))
        .padding(0.1);
    
    const f = svg.append('f')
        .attr('transform', `translate(${margin.left},${margin.top})`)
    
    f.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d=> xScale(xValue(d)))
        .attr('height', yScale.bandwidth());
    


}