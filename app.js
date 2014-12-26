var express = require('express')
var app = express()

var catGifs = ["http://i427.photobucket.com/albums/pp355/NyackBosco/music/dj-cat.gif", "http://i465.photobucket.com/albums/rr14/themishkin/GIFs/party-fails-party-hard-weekend-cats-1.gif",];

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendfile('index.html')
})

app.get('/thecatgif', function(req,res) {
	var theCatGif = req.params.theCatGif;
	//generate a new random cat gif
	var newCatGif = catGifs[Math.floor(Math.random() * catGifs.length + 1)];
	res.send(newCatGif);
})

// app.get('/answer/:chosenAnswer', function(req, res) {
// 	var chosenAnswer = req.params.chosenAnswer;

// 	if(chosenAnswer === "1") {
// 		console.log("a point should be going to the THIS now.")
// 		count1++;
// 	}
// 	else if(chosenAnswer === "2"){
// 		console.log("a point should be going to the THAT now.")
// 		count2++;
// 	}
// 	console.log("REQUEST RECIEVED : " + chosenAnswer);


  var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

