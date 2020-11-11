Purpose: 

To allow multiple users to simultaneously contribute to an online quiz/test/study guide with questions and answers.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### To get the Node Modules.
The app won't work without the referenced libraries. This repo does not include the node modules, to obtain them: 
  Run npm install nameofmodule
  where the names of modules can be found in package.json, to install multiple at once seperate nameofmodule with white space.

### To run the backend

Move to the folder the server.js file is in, run: nodemon server
This should start the server on port 5000

### For the front end/react app
Move to the folder app.js is located, run: npm start
This should render the app on port 3000

If the backend fails to load and mentions permissions, there may be a windows setting you need to change.

### Testing API features

I suggest something like Postman where the url would be the https://localhost:5000/insertendpointhere



