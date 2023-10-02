// This JavaScript was troubleshot and completed with the aid of tutor Jesse Young.
//Code to read in JSON 
d3.json('spanish_wine.json').then((data) => {

// Initialize arrays
let id = []
let winery = []
let wine = []
let year = []
let rating = []
let num_reviews = []
let country = []
let region = []
let price = []
let type = []
let body = []
let acidity = []

// For loop to populate arrays??
for (key in data) {
    // console.log(data[key]);
    row = data[key];
    console.log(row)
    winery.push(row.winery);
    wine.push(row.wine);
    year.push(row.year);
    rating.push(row.rating);
    num_reviews.push(row.num_reviews);
    region.push(row.region);
    price.push(row.price);
    type.push(row.type)
};

//Trace 1 for Wine Rating
var trace1 = {
    x: region,
    y: price,
    text: price,
    name: "price",
    type: "bar",
    marker: {color:"rgba(255,0,32,0.77)"}
};

//Create data array
let graph = [trace1];

//Apply a title to the layout
let layout = {
    title: "Price by Region",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", graph, layout);
});
