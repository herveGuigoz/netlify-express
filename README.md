## express server

## Cors

* Dev

run `npm start`

=> `http://localhost:9000/.netlify/functions/api`

* Netlify

=> `https://cranky-nobel-5938c4.netlify.com/.netlify/functions/cors?=`

Proxy that uses express middleware to apply a `Access-Control-Allow-Origin: *` header to every response from given url as param (`/cors?url=`). 

The proxy set `Access-Control-Allow-Origin: * header` to the response from another server and return the body in json format.

 The same-origin policy doesn’t step in to block the request, even though the domains are different => this is a server-to-server request. 

[ressource](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)