This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

We are using React for the frontend of our project, designed with styled components. 

We allow any user to begin building a webpage by tracking their styling and content choices with Redux, and then we save those changes to our PostgreSQL Database by making an autosave Axios call every 20 seconds.

Our server and database connections are set up using Express and Massive. We secure stored user information using Bcrpyt.

Once a user has completed their project, they have the option to create a subroute of our website that will be a shareable link.