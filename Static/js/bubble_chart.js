// Price vs Rating

function init() {
    buildBubble();
};

init();

function buildBubble() {
    d3.json('spanish_wine.json').then((data) => {

        // console.log(data);

        let winery = []
        let wine = []
        // let year = []
        let rating = []
        // let num_reviews = []
        // let region = []
        let price = []
        // let type = []
        // let idCount
        // let id = [] 

        for (key in data) {
            row=data[key];
            // console.log(row);
            price.push(row.price);
            rating.push(row.rating);
            wine.push(row.wine);
            winery.push(row.winery);
            console.log(price, rating, wine, winery);
        };

        // console.log(id);

        let trace1 = {
            x: price,
            y: rating,
            text: wine,
            mode: "markers",
            name: "Price of Bottle",
            type: "bubble",
            marker: {size: price.map(p => p*0.1)
            }
        };

        let plot = [trace1];

        let layout = {
            title: "Price of Bottle Compared to Rating of Wine",
            margin: {automargin:true},
            hovermode: "closest",
            xaxis: {
                title: 'Price',
                ticktext: [price],
                tickvals: price,
            },
            yaxis: {
                title: 'Rating',
                ticktext: [rating],
                tickvals: rating,
            }
        };

        Plotly.newPlot("price-rating-plot", plot, layout);
    }); 
};

