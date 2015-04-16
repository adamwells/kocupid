	# KOCupid

[Live Demo](http://www.kocupid.co/)

## Minimum Viable Product
KOCupid is a site dedicated to finding fighters matchups - inspired by OKCupid

- [x] Create an account
- [x] Create a session
- [x] View own profile/ other users' profiles
- [x] View basic index of users - late to become matches
- [x] 'Like' other users
- [x] View messages inbox
- [x] View an individual message in inbox
- [x] Compose/Send messages to other users
- [x] Search for users on match page by attributes (age, gender, weight class, etc)
- [ ] Decent seed data
- [x] Demo login button


## Design Documents
* [View wireframes][views]
* [DB Schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase One: Account Creation, User Authentication (~1/2 day)
Implement basic user authentication in Rails and basic registration form.  By the end of this phase users should be able to create an account and log in/ log out using their email or username.  Push project to Heroku to ensure that everything is working in deployment before moving on.

[Details][phase-one]

### Phase Two: View Profile, Edit Profile (~1 day)
Add API routes to serve profile information in JSON.   Create a basic page for users to view their own profile. Use Backbone to allow users to edit individual fields of their own profile by swapping field for a form when an 'edit field' button is clicked.  By the end of this phase, users should be able to view their own profiles and edit fields within a single Backbone app.

[Details][phase-two]

### Phase Three: View Users Index (~1 day)
Add API route to view a basic index of all other users (this will be switched to a search in the last phase).  By the end of this phase, users should be able to view an index of other users and follow links to individual profile pages.

[Details][phase-three]

### Phase Four: View Others' Profiles, 'Like' Other Users (~1 day)
Implement the 'Like' model in Rails.  Allow user to view the profiles of other users (linked to from the matches view).  Allow users to click a button to 'like' another user using a basic Backbone button interface, toggling th button to an 'un-like' button.  By the end of this phase users should be able to view other users' profiles and 'like' other users.

[Details][phase-four]

### Phase Five: Messages (~1-2 days)
Implement the 'Message' model in Rails.  Add API messages controller and routes to view an index of or create messages.  Create a basic message inbox view.  Using Backbone, allow users to switch between viewing sent and recieved messages.  Using Backbone, add a button on the user profile page of other users which pulls up a form in which to compose and send a message to that user.  By the end of this phase, users should be able to view messages sent to them in their inbox, and compose messages to other users via their profile pages.

[Details][phase-five]

### Phase Six: Search Matches (~2-3 days)
Add a Backbone form at the top of the matches page to add search criteria.  Update the current index of users shown based on the given criteria (select from the Users Backbone collection only those that fit the criteria and remove the rest).  If a criteria is made less specific, fetch Users again and narrow it down to match the current criteria.  By the end of this phase, users should be able to search their matches page for only users that match a given set of criteria.

[Details][phase-six]


## Bonus Features
- [ ] Interactive introduction to the site
- [x] Bookmark other users (view bookmarks index)
- [ ] Profile formatting using markdown
- [ ] Colored line at bottom of user index items (based on responsiveness)
- [ ] View visitors
- [ ] View recently visited profiles in sidebar
- [x] Photo uploading
- [ ] Infinite scroll on matches page
- [ ] Questions for better matches
- [ ] Message notifications
- [x] Auto-fill when searching for/messaging users
- [x] Auto-fill when sending messages
- [ ] Show match percentage
- [x] Loading spinner (when loading more users)
- [ ] Order by in matches page
- [ ] Flash notices on frontend

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
