# Import Dependecies needed
import numpy as np
import sqlite3
import pandas as pd
import json
import plotly
import plotly.express as px
import plotly.graph_objs as go
from flask import Flask, jsonify, render_template, request, url_for


#################################################
# Flask Setup
#################################################
# Create an app
app = Flask(__name__) 

#####
# Flask Routes -
#####

# # Define route for index page
@app.route("/")
def index():
    """List all available routes."""
    return (
        f"Available Routes:<br/>"
        f"/bar<br/>"
    )


# define route to bar chart
@app.route("/bar")
def bar_with_plotly():
    
    # create connection 
    cnx = sqlite3.connect("sqlite_wine.db")
    cursor = cnx.cursor()
    
    # query data needed
    cursor.execute("SELECT id, region, wine FROM spanish_wine;")
    
    #save results as variable
    results = cursor.fetchall()
    
    #create a dictionary from the row data and append to a list of wines, body, and acidity
    # all_wine = []
    # wine_id = [result for result in results]
    
    # Convert list to dataframe and assign column values
    df = pd.DataFrame(results, 
                      columns=['id', 'region', 'wine']
                      )
     
    # Create Bar chart
    fig = px.bar(df, x='region', y='wine', color='region', barmode='group')
    fig.update_traces(width=1)
    
    # Create graphJSON
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
     
    # Use render_template to pass graphJSON to html
    return render_template('test.html', graphJSON=graphJSON)

    cnx.close()


#tell Flask to run
if __name__ == "__main__":
    app.run(debug=True)