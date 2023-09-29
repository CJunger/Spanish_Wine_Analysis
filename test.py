# Import Dependecies needed
import numpy as np
import sqlite3
import pandas as pd
import json
import plotly
import plotly.express as px
from flask import Flask, jsonify, render_template, request, url_for


#################################################
# Flask Setup
#################################################
# Create an app
app = Flask(__name__) 

#####
# Flask Routes -
#####

# # Define route for HTML page
@app.route("/")
def index():
    """List all available routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0<br/>"
        f"/maps"
    )


# define route to bar chart
@app.route("/api/v1.0")
def bar_with_plotly():
    
    # create connection 
    cnx = sqlite3.connect("sqlite_wine.db")
    cursor = cnx.cursor()
    
    # query data needed
    cursor.execute("SELECT id, body, acidity FROM spanish_wine;")
    
    #save results as variable
    results = cursor.fetchall()
    
    #create a dictionary from the row data and append to a list of wines, body, and acidity
    all_wine = []
    characteristics_dict = {}
    for result in results:
        characteristics_dict["id"] = result[0]
        characteristics_dict["body"] = result[1]
        characteristics_dict["acidity"] = result[2]
        all_wine.append(characteristics_dict)
    
    # Convert list to dataframe and assign column values
    df = pd.DataFrame(data=all_wine)
     
    # Create Bar chart
    fig = px.bar(df, x='body', y='acidity')
     
    # Create graphJSON
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
     
    # Use render_template to pass graphJSON to html
    return render_template('test.html', graphJSON=graphJSON)

    cnx.close()

# def @app.route("/maps")
# def mapviz():


#tell Flask to run
if __name__ == "__main__":
    app.run(debug=True)