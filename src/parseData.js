let arr = [];
const parseData = stateId => {
    d3.csv('src/birthinfo.csv').then(data => {
        arr = [];
        for (let i = 0; i < data.length; i++) {
            const d = data[i]
            console.log(d);
            if (+d.STATE === +stateId) {
                Object.keys(d).forEach(key => {
                    let stateData = ({ year: key.slice(6), births: data[i][key] })

                    arr.push(stateData)
                })
                console.log(arr.slice(1))
            }
        }
        paintGraph(arr.slice(1))
    })
}
