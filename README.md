Simple application that pulls a list of characters from J.R.R. Tolkien's "The Lord of the Rings" extended universe and displays them in a filterable list. Clicking on a name will open up the One Ring wiki page for that character. 

React front end bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

Back end node server leveraging express for api endpoints.

Utilizes [The LOTR API](https://the-one-api.herokuapp.com/documentation) for character names and wiki links.

Tested and working with both Chrome and Firefox. Edge seems to have a problem with it but no surprises there.

## Running Locally

From the main project directory:

Install the necessary dependancies:

### `npm install`

Start the node server, runs on port 8085 by default:

### `node node_server.js <apiKey>`

In a separate terminal window, start the react app in development mode. Runs on port 3000 by default:

### `npm start`

Application is now viewable at [http://localhost:3000/](http://localhost:3000/)

## About Create react App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
