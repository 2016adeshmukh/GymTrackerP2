var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'localhost:27017/GymTrackerP2';

MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log("Connected successfully to server");

	db.close();
})