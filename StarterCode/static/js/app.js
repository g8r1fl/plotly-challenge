// this is from the samples json file that I converted to samples.js for practice
console.log("This is from my samples.js file",samples);

// read the json data and test that I can read it and manipulate it
d3.json('samples.json').then(function(data) {
    console.log(data);
    // first set of otu_ids
    console.log(data.samples[0].otu_ids);
    // third set of sample_values
    console.log(data.samples[3].sample_values)
    var samples = data.samples;
    console.log(samples);
});

// build test chart (works but not top 10)
// https://www.tutorialspoint.com/top-n-max-value-from-array-of-object-javascript

var trace1 = {
    x: samples.samples[0].sample_values.slice(0,10).sort((a, b) => {return b.sample_values - a.sample_values}),
    y: samples.samples[0].otu_ids.slice(0,10),
    text: samples.samples[0].otu_labels,
    type: 'bar',
    orientation: 'h'
};

var data = [trace1];

var layout = {};

Plotly.newPlot("bar", data)