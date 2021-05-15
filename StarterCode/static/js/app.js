// this is from the samples json file that I converted to samples.js for practice
console.log("This is from my samples.js file",samples);

// read the json data and test that I can read it and manipulate it
d3.json('samples.json').then(function(data) {
    console.log(data);
    // first set of otu_ids
    console.log("This is the list of OTU ids:",data.samples[0].otu_ids.slice(0,10));
    // revers sort of otu_ids
    console.log(data.samples[0].otu_ids.slice(0,10).reverse())
    // third set of sample_values
    console.log("This is the list of sample values:",data.samples[3].sample_values.slice(0,10))
    var samples = data.samples.slice(0,10);
    console.log("These are all the samples:",samples);
    var trace1 = {
        x: data.samples[0].sample_values.slice(0,10).reverse(),
        y: ['a','b','c','d','e','f','g','h','i','j'].sort((a, b) => {b-a}),
        // y: data.samples[0].otu_ids.slice(0,10),
        text: data.samples[0].otu_labels,
        type: 'bar',
        orientation: 'h'
    };

    var data = [trace1]
    Plotly.newPlot('bar', data);
});

// build test chart (works but not top 10)
// https://www.tutorialspoint.com/top-n-max-value-from-array-of-object-javascript
// for sorting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// let sam_vals = samples.samples[0].sample_values.slice(0,10).sort((a,b) => {b-a});
// let otus = samples.samples[0].otu_ids.slice(0,10)
// var labels = otus.map(elem => elem.toString());
// console.log("The top ten otu-id's are", otus);
// console.log("The top ten sample values are", sam_vals);
// console.log(labels);



// var trace1 = {
//     x: samples.samples[0].sample_values.slice(0,10).sort((a, b) => {b-a}),
//     y: labels,
//     // y: samples.samples[0].otu_ids.slice(0,10),
//     text: samples.samples[0].otu_labels,
//     type: 'bar',
//     width: [5,5,5,5,5,5,5,5,5,5],
//     orientation: 'h'
// };

// var data = [trace1];

// var layout = {
//     yaxis: {range: labels.length},
// };

// Plotly.newPlot("bar", data)