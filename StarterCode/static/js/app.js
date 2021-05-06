console.log("This is from my samples.js file",samples);

d3.json('samples.json').then(function(data) {
    console.log(data);
    console.log(data.samples[0].otu_ids);
    var samples = data.samples;
    console.log(samples);
});


var trace1 = {
    x: samples.samples[3].sample_values,
    y: samples.samples[3].otu_ids,
    text: samples.samples[3].otu_labels,
    type: 'bar'
};

var data = [trace1];

var layout = {};

Plotly.newPlot("bar", data)