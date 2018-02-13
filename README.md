# Boilerplate: Node.js + Express

A simple boilerplate for writing Node.js apps using express for routing.

To start using it just clone this repo:

``` bash
$ git clone https://github.com/krga/boilerplate-nodejs-express.git
```

Change into the created directory and customize to **package.json** to your liking.

Additionally environment variables should be defined in the **.env** file like the port number. 

``` 
PORT=3000
```

The important directories are

- **routes**: includes all the express routes which are defined in the file **routes.js**

Start the app normally by using npm 

``` bash
$ npm start
```

or node directly

``` bash
$ node app.js
```