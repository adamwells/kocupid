# Schema Information

## users
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## likes
column_name     | data_type | details
----------------|-----------|------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key
likee_id        | integer   | not null, foreign key

## messages
column_name          | data_type | details
---------------------|-----------|------------------
id                   | integer   | not null, primary key
sender_id            | integer   | not null, foreign key
recipient_id         | integer   | not null, foreign key
body                 | text      | not null
visible_to_sender    | boolean   | default: true
visible_to_recipient | boolean   | default: true

## profiles
column_name                  | data_type | details
-----------------------------|-----------|------------------
id                           | integer   | not null, primary key
user_id                      | integer   | not null, foreign key
gender                       | string    |
photo_url                    | string    |
self_summary                 | text      |
good_at                      | text      |
message_if                   | text      |
height_feet                  | integer   |
height_inches                | integer   |
weight                       | integer   |
body_type                    | string    |
weight_class                 | string    |
style                        | string    |
looking_for_wrestler         | boolean   |
looking_for_boxer            | boolean   |
looking_for_mma_fighter      | boolean   |
looking_for_other_styles     | boolean   |
looking_for_women            | boolean   |
looking_for_men              | boolean   |
looking_for_opponent         | boolean   |
looking_for_sparring_partner | boolean   |
