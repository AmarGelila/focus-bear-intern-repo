### Making API Calls with Axios #15

##### Why is it useful to create a reusable Axios instance?
It centerlize configuration instead of write the same configuration with every api request.

##### How does intercepting requests help with authentication?
It enables get authentication token from localstorage and add it to headers before request made.

##### What happens if an API request times out, and how can you handle it?
The client stops waiting for response and the server does not send a response or an error ,
axios enable timeout handing by checking error code if it equals "ECONNABORTED" then the request timed out and I can show a confirmation message to the user. 

#### Task :-
see [AxiosTask](./react-project/src/components/AxiosTask.jsx)
