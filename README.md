# To start

`yarn` or `npm install`
`yarn start` or `npm start`

Once you run the above commands, a mock JSON server will be spawned at http://localhost:3001 and the application will run at http://localhost:3000. Both these processes will run concurrently.

If for some reason yarn/json-server command fails ( It happened with me on Git bash on Windows, but worked fine in Ubuntu default terminal ) install json-server globally using `npm install -g json-server` and then run `json-server --watch .\\src\\services\\db.json --port 3001` inside the app directory. Once json-server is running successfully, refresh the application page i.e. http://localhost:3000 . The merchants list should be visible and add/update/delete actions will work fine.

# Assumptions
- As of now, there is no provision to submit bids and therefore all new merchants which will be added through the form will not have any bids listed under their name.

# Things which are not implemented
- Custom form validation is not implemented, and only HTML5 form validation is been used.
- propTypes validation
- Loading indicator / spinner functionality is not added in this app as of now.
- Unit test cases ( Basic app load test is added with the help of Enzyme and Chai libraries )

# Additional Packages / Libraries used
- axios ( for making API calls )
- bootstrap ( modal and other styling )
- concurrently ( To spawn json-server and main app concurrently )
- json-server ( mock api server )
- redux-form ( add / update merchant forms )
- react-redux-toastr ( success / error notifications )
- redux-thunk ( async actions dispatch )
- react-redux ( helper library )