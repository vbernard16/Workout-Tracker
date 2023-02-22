# Workout Tracker---Server

## Description

Track your gains with "My Fit", your very own customizable fitness tracker that let's you store, add, edit, and even delete your workouts.

Finally! It's just like having your very own personal trainer, but on your desktop or mobile device and only half the price. 

"My Fit" lets you manually add excercises in your profile so you can keep track of your workouts throughout the week.
Add fields such as reps, sets.... and that's it! With "My Fit" you can do it all!

So click the link in the "Getting Started" section below, sign up and get your fit on.


## How to run

To get started, click [this] link. You'll be taken to the sign-in/sign-up page. Once you create an account, sign in using your account info.

Once you're logged in, you're ready to begin your fitness journey.


## ERD 

### Models: User, Workout, Routine

### User---Workout
![ERD](erd/user%26workoutErd.png)


### Workout---Routine
![ERD](erd/workout%26RoutineErd.png)

## Routes Table

Routes showing endpoints for "workout" and "user" models, as well as the "routines" endpoint

| Name        | Path          | HTTP Verb | Purpose                                       |
|-------------|---------------|-----------|-----------------------------------------------|
| Index       |/workouts      | GET       |Displays all users workouts                    |
| Show        |/workouts/:id  | GET       |Displays one of user's workouts                |
| Add         |/workouts      | POST      |Adds new workout to user's profile             |
| Update      |/workouts/:id  | PATCH     |Updates one of user's workouts                 |
| Destroy     |/workouts/:id  | DELETE    |Delete one of user's workouts                  |
| Add         |/sign-in       | POST      |Signs in user                                  |
| Add         |/sign-up       | POST      |Signs user up with new profile                 |
| Add         |/routines      | POST      |Adds new excercise routine to workout          |  
| Update      |/routines/:id  | PATCH     |Updates an existing workout's excercise routine|




 
## Technologies Used
- Mongoose
- MongoDB
- Express
- Node.js
- JavaScript
- HTML
- CSS

### Ver.2

- Optional admin privilages that allow an admin to delete an excercise that the user has added to the database
- Drop down list of excersices separated by category: strength-training, cardio, etc.
- User profile picture

### Ver.3
- Api inclusion
- Description of each excercise
- Search bar the uses api to find the excercise that is typed in# Workout-Tracker
