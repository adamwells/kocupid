# Schema Information

## users
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## profiles
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
self_summary    | text      |
message_if      | text      |
height          | integer   |
weight          | integer   |
weight_class    | string    |
style           | string    |

## likes
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key
likee_id        | integer   | not null, foreign key

## messages
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key
recipient_id    | integer   | not null, foreign key
body            | text      | not null
