const menu = d3.select('.menu');

const menuWidth = +menu.attr('width');
const menuHeight = +menu.attr('height');

let selectedTrain;

const handleClick = id => {
    selectedTrain = id;
};

d3.csv("src/data.csv", (error, data) => {
    if (error) throw error;

    data.forEach(d => {
        d.count = +d.count;
        d.fruit = d.fruit;
        console.log(d)
    })

    menu.selectAll('circle').data(data)
        .enter().append('circle')
        .attr('cx', (d, i) => {return i * 160 + 60})
        .attr('cy', menuHeight / 2)
        .attr('r', (d, i) => {return d.count * 2})
        .attr('key', (d, i) => {return i})
        .on('click', (d, i)=> {
            console.log(i)
        });
})

