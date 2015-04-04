# Schema Information

## users
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## profile
column_name     | data_type | details
----------------|-----------|------------------
user_id         | integer   | not null, foreign key
summary         | text      |
