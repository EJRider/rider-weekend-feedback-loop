# Feedback Form



## Description

_Duration: 4 Days_


This project was designed to be a repeatable, quick use feedback form. It measures how the user is feeling at the time of filling the form, how they feel when it comes to the level of avalible support, how well the user feels they understand the topic, and any comments they might have. 

### Prerequisites


- [Node.js](https://nodejs.org/en/)
- Postico(https://eggerapps.at/postico2/)
- PostgreSQL (https://www.postgresql.org/)
## Installation



1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The user rates from 1 to 6 how they feel 
2. The user rates from 1 to 6 how supported they feel
3. The user rates from 1 to 6 how well they feel the understand the material
4. If the user has any comments they write them in the comments section
5. The user reviews their information, if they feel that the info is correct they click the yes button and are sent to the home page
6. If the user does not feel the info is correct they can click the 'No' button and are sent to the start of the form and follow steps 1-4.


## Built With

- Node.js
- React
- Redux
- React-Redux
- Redux-Logger
- React-Redux-Dom
- Postico
- PostgreSQL