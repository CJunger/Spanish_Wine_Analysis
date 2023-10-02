// Price vs Rating

d3.json('spanish_wine.json').then((dataObject) => {
    // Converting data type
    const data = Object.values(dataObject);
    
    // Extract unique wineries from data
    const uniqueWineries = [...new Set(data.map(row => row.winery))];
    
    // Populate dropwdown menu with winery options
    const dropdown = document.getElementById('winery-dropdown');
    uniqueWineries.forEach(winery =>{
        const option = document.createElement('option');
        option.value = winery;
        option.text = winery;
        dropdown.appendChild(option);
    });

    buildBubble(data);

    // Adding event listener
    dropdown.addEventListener('change', function (){
        const selectedWinery = this.value; // Get the winery

        //Filter data
        const filteredData = Object.values(data).filter(row => row.winery === selectedWinery);

        buildBubble(filteredData)
    });
});

// Creating function to build bubble charts
function buildBubble(data) {
    const price = data.map(row => row.price)
    const rating = data.map(row => row.rating)
    const wine = data.map(row => row.wine)

    let trace1 = {
        x: price,
        y: rating,
        text: wine,
        mode: "markers",
        name: "Price of Bottle",
        type: "bubble",
        marker: {size: price.map(p => p*0.25)
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

    if (window.myplot) {
        Plotly.react('price-rating-plot', plot, layout);
    } else {
        window.myPlot = Plotly.newPlot("price-rating-plot", plot, layout);
    }
}; 


