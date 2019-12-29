This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## PROJECT DESCRIPTON

Our project is an webaplication where the user gets to calculated their chance of survivng the Titanic.
The input is answers to Y/N questions and a username. The output is a number between 0 and 1, visualzation of the data(decison tree), and a place on our leaderboard.

## What we done so far

We have implemnted a homepage,questionpage,leaderboard-page, and a visualzationpage. The homepage has a input component where the user enters their username. The questionpage contains a topbar and a question-component. The leaderboard-page contains of a mock-up leaderboard-component(mock-up data). The visualzation-page is a tree from static data for now.

## What we plan on doing

Complete the leaderboard and visualzationpage. Work on the GUI so the app as a whole is more user friendly. Create a in-game visualzation component wich will be a part of the question-component or topbar-component.

## File structure

We are using a default react typescript enviroment with scss. We implementent a global state using redux and are using apollo clientside to handle GraphQL request. The file strucutre is a MVC with Containers > Pages > Views > Components.

## The API

The API we are using is implemented using the API specification GraphQL and is hosted on AWS with no CORS restrictions.

## Scripts

## npm run start

Starts the application in development mode to be run locally

## npm run build

Build the applciation
