


// updatePlot = (data) => {
//     let id = d3.event.target.value; //value of dropdown list
//     let sample = data.samples.filter(sample => sample.id === id);
//     let x_buble = sample.otu_ids;
//     let y_bubble = sample.sample_values;
//     let x_bar = sample.otu_ids.slice(0,10);
//     let y_bar = sample.sample_values.slice(0,10);

// }

d3.json('samples.json').then(data => {
    console.log(data);
    
    // filter samples to element 940
    let filtered = data.samples.filter(sample => sample.id === "940");
    let x = filtered.map(otus => otus.otu_ids);
    console.log("This is the mapped otu ids for ID #940: ",x[0].slice(0,10));
    console.log(filtered[0].otu_ids);
    //  get data for plots
    let sample = data.samples.filter(sample => sample.id === "940");
    let x_buble = sample.otu_ids;
    let y_bubble = sample.sample_values;
    let x_bar = x.slice(0,10);
    console.log(x_bar);
    let y_bar = sample[0].sample_values.slice(0,10);
    let droplist = data.names;
    
    // build initial hbar plot
    var trace1 = {
        x: x_bar,
        y: y_bar,
        type: 'bar'
    };
    
    var data = [trace1];

    Plotly.newPlot("bar", data);

    // build initial bubble plot

    // build dropdown list
    const menu = d3.select("#selDataset");

    droplist.forEach(item => {
        menu.append("option").attr("value", item).text(item);
    })
    // menu.on("change", () => 
    // updatePlot(data));
});

// function init () {
//     // let first = data.samples.filter(sample => sample.id === "940");
//     // console.log(first);
//     // var trace1 = {
//     //     x: filtered.otu_ids.slice(0,10),
//     //     y: filtered.sample_values.slice(0,10),
//     //     type: 'bar'
//     // };
    
//     // var data = [trace1];

//     // Plotly.newPlot("plot", data);

// }
// init();