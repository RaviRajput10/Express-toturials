/* npm init -y for package.json file
 npm i express 
  $env:PORT=8000 to set the server path 

  1. Dynamic routes = req.params
  2. Query string: req.query
  3. Request Body: req.body
  4. Cookies: req.cookies
  5. Headers : req.headers

  it is used to share the some arbotrary data or meta info to server order to allow the server to do certain other thing which is not client/user facing
*/

/*  
You can share data to the server through the url in the string  or accept user input via Query string

In Express.js, you can directly use the req.query() method to access the string variables. As per the documentation, 
the req.param method only gets the route parameters, whereas the req.query method checks the query string parameters. 
For example, "?id=12" checks urlencoded body params.
Syntax
req.query( )

It is not use for confedential data(form data), basically it is use for Pagination to jump to the another page
*/

// HTTP Verbs - Crud operations ( GET, POST, PUT, PATCH, DELETE)

// regular expression - ?(optional) -- abc? c is optional
                    //  abc+ -- abcc (one c is extra) still working

/* 
The app.all() function is used to route all types of HTTP requests  
Like if we have POST, GET, PUT, DELETE, etc, requests made to any specific route, let’s say /user, so instead of defining different APIs like app.post(‘/user’), app.get(‘/user’), etc, we can define single API app.all(‘/user’) which will accept all type of HTTP request.  */                

/*
MiddleWare

it is process the JSON data 
it sees content type header and value set to application type json
--header 'Content-Type: application/json' \
*/