DROP KEYSPACE IF EXISTS reviews_services;
CREATE KEYSPACE reviews_services
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE reviews_services;

CREATE TABLE reviews(
  sellerid INT PRIMARY KEY,
  seller VARCHAR,
  reviews INT,
  ratings INT,
  comments TEXT
);

COPY reviews_services.reviews (sellerid, seller, reviews, ratings, comments) FROM '/Users/jonathanyang/Desktop/HRR41/SDC-team-6/BTetsy-review-service/allReviews.csv' WITH HEADER=TRUE;
