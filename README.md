# To start

`yarn` or `npm install`
`yarn start` or `npm start`

Once you run the above commands, a mock JSON server will be spawned at localhost:3001 and the application will run at localhost:3000. Both these processes will run concurrently.

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