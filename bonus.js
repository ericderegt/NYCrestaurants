var express = require('express');
var req = require('request');
var app = express();

app.get('/food/:input', function(request, response) {
	req('https://data.cityofnewyork.us/resource/xx67-kt59.json', function(err, res, body) {
		restData = JSON.parse(body);
		restArr = [];

		restData.forEach(function(element) {
			if (element.boro.toUpperCase() === request.params.input.toUpperCase() && restArr.indexOf(element.dba) === -1) {
				restArr.push(element.dba);
			} else if (element.zipcode === request.params.input && restArr.indexOf(element.dba) === -1) {
				restArr.push(element.dba);
			} else if (element.cuisine_description.toUpperCase() === request.params.input.toUpperCase() && restArr.indexOf(element.dba) === -1) {
				restArr.push(element.dba);
			}
		})

		var responseString = restArr.join('<br>');
		response.send(responseString);
	})
})

app.get('/food/:boro/healthy', function(request, response) {
	req('https://data.cityofnewyork.us/resource/xx67-kt59.json', function(err, res, body) {
		restData = JSON.parse(body);
		restArr = [];

		restData.forEach(function(element) {
			if (element.boro.toUpperCase() === request.params.boro.toUpperCase() && element.grade === 'A' && restArr.indexOf(element.dba) === -1) {
				restArr.push(element.dba);
			}
		})

		var responseString = restArr.join('<br>');
		response.send(responseString);
	})
})

app.get('/food/:name/violations', function(request, response) {
	req('https://data.cityofnewyork.us/resource/xx67-kt59.json', function(err, res, body) {
		restData = JSON.parse(body);
		restArr = [];
		var restName = request.params.name.replace(/\+/gi,' ').toUpperCase();

		restData.forEach(function(element) {
			if (element.dba === restName) {
				restArr.push(element.violation_description);
			}
		})

		var responseString = restArr.join('<br>');
		response.send(responseString);
	})
})

app.listen(3000, function() {
	console.log('listening on port 3000');
})