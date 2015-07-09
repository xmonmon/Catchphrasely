var express = require("express");
var app = express();

var bodyParser = require('body-parser')


//app.us is where it takes the information and uses it in the middlewhere, the middlewhere is a piece of software that is in the middle of the front and back end that changes the info and then passes it onto the server
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

var users = [
	{id: 1,
	username: "xmonmon",
	firstname: "Monika",
	lastname: "Chumber",
	age: 20
	},
	{id: 2,
	username: "jchummy",
	firstname: "Julfi",
	lastname: "Chumber",
	age: 23
	},
	{id: 3,
	username: "anissachristina",
	firstname: "Christina",
	lastname: "Mendez",
	age: 20
	},
	{id: 4,
	username: "anissachristina",
	firstname: "Christina",
	lastname: "Mendez",
	age: 20
	},
];
app.get('/', function(req,res){
	res.send('Monika sucks at life');
})
// this is Reading it
// for the res.json you  just have to call the variable bc it's all attatched to it
app.get("/users", function (req, res) {
    res.json(users);
});

// now this will creat it
// you can use the same '/users' bc they are different types of actions (get & post) so they won't happen at the same time
// you can only use the req.body since we have the var bodyParser at the top
app.post("/users", function(req, res) {
	var newUser = req.body; 
	users.push(newUser);
	res.json(newUser);
});

// update phrase
app.put('/users/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var usersId = parseInt(req.params.id);
  // find item in `phrases` array matching the id
  var targetUsers = _.findWhere(users, {id:userId});
  // update the phrase's word
  targetUsers.id = req.body.id;
  targetUsers.username = req.body.username;
  targetUsers.firstname = req.body.firstname;
  targetUsers.lastname = req.body.lastname;
  targetUsers.age = req.body.age;
  // send back edited object
  res.json(targetUsers);
});

// delete phrase
app.delete('/users/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var usersId = parseInt(req.params.id);
  // find item in `phrases` array matching the id
  var targetUsers = _.findWhere(users, {id:phraseId});
  // get the index of the found item
  var index = users.indexOf(targetUsers);
  // remove the item at that index, only remove 1 item
  users.splice(index, 1);
  // send back deleted object
  res.json(targetUsers);
});

app.listen(3000);
