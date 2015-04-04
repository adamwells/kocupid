# KOCupid

## Minimum Viable Product
- [ ] Create an account
- [ ] Create a session
- [ ] View own profile
- [ ] Edit profile
- [ ] View matches
- [ ] View other users' profiles
- [ ] 'Like' other users
- [ ] View messages inbox
- [ ] View an individual message in inbox
- [ ] Compose/Send messages to other users
- [ ] Search for users on match page by attributes (age, gender, weight class, etc)

## Design Documents
* [View wireframes][views]
* [DB Schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase One: User creation, authentication, profile (~1 Day)
Implement basic user authentication features in Rails.  Create a simple form for creating a new user account or logging in.  Implement user profile form to fill out basic user details and summary.  By the end of this phase users should be able to create a new account, log in, fill out their profile and submit it, and log out.

## Phase Two: Viewing matches, other users' profiles
Create an API controller to send JSON of users.  Add a basic index of other users (to become the 'matches' page later).  Add a basic profile page that the items in the user index link to.

## Bonus Features
