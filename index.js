const sqlite = require("sqlite3").verbose(); //engine database
const db  = new sqlite.Database("./db.db")//databasenya
const express    = require("express");
const app        = express();
const session      = require('express-session');

app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({extended : true}));
app.use(express.json());
db.run("PRAGMA journal_mode = MEMORY");
db.run("PRAGMA synchronous = OFF");

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static(__dirname + "/public"));

app.listen(3645);



app.get('/', function(request, response) {
	if (request.session.loggedin) {
   response.render("home.ejs")  
	} else {
  response.render("./login.html")
	}
 response.end();
});

//submit login
app.post('/', async function(request, response) {
 try {	
		let username = (request.body.username) ? request.body.username:'';
		
		let password = (request.body.password) ? request.body.password:'';
			if(username || password ===''){
				response.send(" username atau password kosong");
				response.end();
				return;
			}

		let
	} catch (error) {
		console.log("43"+error)
	}
});