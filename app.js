var express = require('express')
var app = express()

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendfile('index.html')
})

app.get('/answer/:firstAnswer/:secondAnswer/:chosenAnswer', function(req, res) {
	var first = req.params.firstAnswer;
	var second = req.params.secondAnswer;
	var chosenAnswer = req.params.chosenAnswer;

	if(chosenAnswer === "1") {
		console.log("a point should be going to the THIS now.")
		count1++;
	}
	else if(chosenAnswer === "2"){
		console.log("a point should be going to the THAT now.")
		count2++;
	}
	console.log("REQUEST RECIEVED : " + chosenAnswer);


  var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})