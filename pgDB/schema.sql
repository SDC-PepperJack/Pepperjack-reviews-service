DROP DATABASE IF EXISTS reviews_services;
CREATE DATABASE reviews_services;

\c reviews_services;

CREATE TABLE reviews (
  sellerid INTEGER PRIMARY KEY NOT NULL,
  seller TEXT NOT NULL,
  reviews INTEGER NOT NULL,
  ratings INTEGER NOT NULL
);


CREATE TABLE comments (
  commentsid INTEGER NOT NULL,
  reviewerName TEXT NOT NULL,
  reviewerAvatar TEXT NOT NULL,
  reviewerComment TEXT NOT NULL,
  reviewerPhotoInComment TEXT NOT NULL,
  reviewerItem TEXT NOT NULL,
  reviewerItemPhoto TEXT NOT NULL,
  rating INTEGER NOT NULL,
  reviewerDate TEXT NOT NULL
);

CREATE INDEX commentid
ON comments (commentsid);
