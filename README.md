# Workout Tracker---Server

## Description

Track your gains with "My Fit", your very own customizable fitness tracker that let's you store, add, edit, and even delete your workouts.

Finally! It's just like having your very own personal trainer, but on your desktop or mobile device and only half the price. 

"My Fit" lets you manually add excercises in your profile so you can keep track of your workouts throughout the week.
Add fields such as reps, sets.... and that's it! With "My Fit" you can do it all!

So click the link in the "Getting Started" section below, sign up and get your fit on.


## How to run

Will fill in later

## Wire Frames

### Sign In 
![Sign In](planning/wireframes/sign-in.png)

### Sign Up 
![Sign Up](planning/wireframes/sign-up-page.png)

### User Homepage
![Homepage](planning/wireframes/home-page.png)

### Workout Planner 
![Workout Page](planning/wireframes/workout-planner-page.png)

## ERD 

### Models: User, Workout, Excercise

### User---Workout
![ERD](erd/user%26workoutErd.png)


### Workout---Excercise
![ERD](erd/workout%26RoutineErd.png)

## Routes Table

Routes showing endpoints for "workout" and "user" models, as well as the "routines" endpoint

| Name        | Path          | HTTP Verb | Purpose                                       |
|-------------|---------------|-----------|-----------------------------------------------|
|             |/workouts      | GET       |Displays all users workouts                    |
|             |/workouts/:id  | GET       |Displays one of user's workouts                |
|             |/workouts      | POST      |Adds new workout to user's profile             |
|             |/workouts/:id  | PATCH     |Updates one of user's workouts                 |
|             |/workouts/:id  | DELETE    |Delete one of user's workouts                  |
|             |/sign-in       | POST      |Signs in user                                  |
|             |/sign-up       | POST      |Signs user up with new profile                 |
|             |/routines      | POST      |Adds new excercise routine to workout          |  
|             |/routines/:id  | PATCH     |Updates an existing workout's excercise routine|




 
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
