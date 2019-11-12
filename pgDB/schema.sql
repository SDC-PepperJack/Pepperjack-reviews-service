DROP DATABASE IF EXISTS reviews_services;
CREATE DATABASE reviews_services;

\c reviews_services;

CREATE TABLE reviews (
  sellerid INTEGER PRIMARY KEY NOT NULL,
  seller TEXT NOT NULL,
  reviews INTEGER NOT NULL,
  ratings INTEGER NOT NULL,
  comments  TEXT [] NOT NULL
)
