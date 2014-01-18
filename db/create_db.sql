CREATE TABLE users(
  email TEXT NOT NULL,
  name  TEXT NOT NULL,
  pwd   TEXT NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE tweets(
  id SERIAL PRIMARY KEY,
  tweet TEXT,
  email TEXT NOT NULL,
  crtTime TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  FOREIGN KEY (email) REFERENCES users(email)
);


CREATE TABLE followers(
  usr TEXT NOT NULL,
  follower TEXT NOT NULL,
  FOREIGN KEY (usr) REFERENCES users(email),
  FOREIGN KEY (follower) REFERENCES users(email)
);
