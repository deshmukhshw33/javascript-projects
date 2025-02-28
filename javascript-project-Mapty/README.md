# Mapty - Workout Tracker

## Overview
Mapty is a workout tracking application that allows users to log running and cycling workouts based on their current location. It utilizes the browser's geolocation API and the Leaflet library to render an interactive map where users can mark and save their workouts.

Checkout the live demo of the project [Demo](https://workoutmapdemo.netlify.app/)

## Features
- Tracks running and cycling workouts.
- Uses the geolocation API to get the user's current position.
- Displays the workout details on an interactive map.
- Saves workouts in local storage so they persist after reloading the page.
- Allows users to switch between workout types.

## Technologies Used
- HTML, CSS, JavaScript
- Leaflet.js (for interactive maps)
- Local Storage API
- Geolocation API

## How It Works
1. The application asks for the user's location.
2. The map is loaded at the user's current position.
3. Users can click on the map to log a workout (Running or Cycling).
4. Workout details such as distance, duration, cadence, and elevation are stored.
5. Workouts appear as markers on the map and in a list.
6. Data is saved in local storage for persistence.

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/deshmukhshw33/javascript-projects.git
   ```
2. Go inside `javascript-project-Mapty` project folder.
3. Open `index.html` in a browser.
4. Allow location access when prompted.
5. Click on the map to log workouts.


## Acknowledgments
This project was inspired and developed as part of the **Jonas Schmedtmann's JavaScript Course on Udemy**, providing practical experience in building functional web applications.

