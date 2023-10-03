# Project 3: Spanish Wine Analysis

## Table of Contents

1. [Introduction](#introduction)
2. [Data Processing](#data-processing)
3. [Regions and Wineries](#regions-and-wineries)
4. [Region and Wine Counts](#region-and-wine-counts)
5. [Price and Region](#price-and-region)
6. [Ratings and Prices](#ratings-and-prices)
7. [HTML Page Demo](#html-page-demo)
8. [Summary: Findings & Opportunities](#summary-findings-&-opportunities)
9. [References](#references)


## Introduction
Imagine you are planning a vacation to Spain and want to know what region you should visit. 
Allow your decision to be guided by Spain’s wine offerings.
We have analyzed a dataset to do just that and invite you to explore our findings!


## Data Processing
Technologies used:
- Cleaning & narrowing results
- SQLite database & Flask
- Javascript
- HTML/CSS
- Libraries: D3, Plotly, Leaflet, Bootstrap


## Regions and Wineries
As of 2019, Spain has 138 identifiable wine regions
Most widely planted wine-producing country (2.9 million acres), second largest producer of wine
Over 400 wine varieties
Mountain ranges influence the climate of several wine regions


## Region and Wine Counts
Comparing total wines produced by region
Interactive hover chart shows wine types
Our Flask app has two routes. The bar route creates the Bar Chart for the Region and Wine counts.
The API route creates a JSON API of the entire dataset.

When we compare the region and wine counts, we can see that La Roija is by far the most prolific region when it comes to wine in our data set.  This region is in the north of the Iberian Peninsula. The region unsurprisingly is well known for its wines under the brand Denominación de Origen Calificada Rioja.  The next two closest regions are Priorato and Unico but even combined it doesn't equal the La Roija region.

## Price and Region
Wine in Spain ranges from a few to a few thousand Euros per bottle. Our dataset for this project will observe a range from $4.99 to $877.85 per bottle. However, price does not necessarily indicate popularity as Mucho mas Tinto, the lowest priced bottle, has the most at a whopping 32,624 reviews. While Unico, the most expensive, has only 935 reviews. 

Taking a closer look at the relationship between total price and region we expose some limitations of this dataset. The first thing you will notice is the region, Ribera del Duero, has a disproportionately larger total cost than any other region represented here. This is because 37% (165/443 entries) of the bottles of wine in this dataset originate from this region. This is 1 of 11 of the highest quality regions located along the course of the Duero River and was also awarded Wine Region of the year in 2012. We can speculate that this influx of data could be due to high tourism volume. 


## Ratings and Prices
We sought to compare wine ratings and prices by region. Our bubble chart demonstrated that a moderate number of expensive wines had a large number of reviews. The more affordable wines had fewer reviews individually, but there were many more affordable wines reviewed.


## HTML Page Demo


## Summary: Findings & Opportunities 

### Project Constraints
1. Disproportionate rating sample size skewed results
- False indicator of popularity, quality, and regional offerings

### Additional Prospects
1. Customized wine recommendations based on user flavor preference
2. Potential correlations between harvest year and ratings

### Future Development
1. Expansion to include datasets from other countries
2. Connect with travel sites for enhanced vacation planning


## References
- Office Hours & Class Resources
- https://www.kaggle.com/datasets/fedesoriano/spanish-wine-quality-dataset   
- https://en.wikipedia.org/wiki/Spanish_wine
- https://en.wikipedia.org/wiki/Spanish_wine_regions
- https://github.com/codeforgermany/click_that_hood/blob/main/public/data/spain-communities.geojson
- https://startbootstrap.com/theme/one-page-wonder 
- https://community.plotly.com/t/bar-width-using-plotly-express/47580/2
- https://www.geeksforgeeks.org/create-a-bar-chart-from-a-dataframe-with-plotly-and-flask/
- https://www.w3schools.com/js/js_graphics_chartjs.asp
- https://en.wikipedia.org/wiki/Ribera_del_Duero
- JavaScript written with the aid of tutor Jesse Young.


