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

### Phase One: Account Creation, User Authentication
Implement basic user authentication in Rails and basic registration form.  By the end of this phase users should be able to create an account and log in/ log out using their email or username.  Push project to Heroku to ensure that everything is working in deployment before moving on.

## Phase Two: View Profile, Edit Profile
Add API routes to serve profile information in JSON.   Create a basic page for users to view their own profile. Use Backbone to allow users to edit individual fields of their own profile by swapping field for a form when an 'edit field' button is clicked.  By the end of this phase, users should be able to view their own profiles and edit fields within a single Backbone app.

## Phase Three: View Matches
Add API route to view a basic index of all other users (this will be switched to a search in the last phase).  By the end of this phase, users should be able to view their 'matches' and follow links to individual profile pages.

## Phase Four: View Others' Profiles, 'Like' Other Users
Implement the 'Like' model in Rails.  Allow user to view the profiles of other users (linked to from the matches view).  Allow users to click a button to 'like' another user using a basic Backbone button interface.  By the end of this phase users should be able to view other users' profiles and 'like' other users.

## Phase Five: Messages
Implement the 'Message' model in Rails.  Add API routes to view an index of or create messages.  Create a basic message inbox view.  Using Backbone, allow users to switch between viewing sent and recieved messages.  Using Backbone, add a button on the user profile page of other users which pulls up a form in which to compose and send a message to that user.  By the end of this phase, users should be able to view messages sent to them in their inbox, and compose messages to other users via their profile pages.

## Phase Six: Search Matches



## Bonus Features
- [ ] Have demo login button
- [ ] Forgot password functionality
- [ ] Sign in with facebook
- [ ] Bookmark other users
- [ ] View visitors
- [ ] Sidebar - You might like (links to profiles)
- [ ] Questions for better matches
- [ ] Colored line at bottom of user index items (based on responsiveness)
- [ ] Interactive introduction to the site
