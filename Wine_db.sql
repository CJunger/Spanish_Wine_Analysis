CREATE TABLE wineinfo (
	id INTEGER NOT NULL,
	winery VARCHAR,
	wine VARCHAR,
	year VARCHAR,
	rating float,
	num_reviews INTEGER,
	country VARCHAR,
	region VARCHAR,
	price float,
	type VARCHAR,
	body float,
	acidity float,
	PRIMARY KEY (id));
	