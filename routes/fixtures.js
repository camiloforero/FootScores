var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();

var exports = {};

const hostname = 'https://api.football-data.org/v1/';

var options = {
  'method': 'GET',
  'headers': {
    'dataType': 'json',
    'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
    'X-Response-Control': 'minified'
  }
};

function getMatchesByCompetition(id, callback) {
  options.url = hostname +'competitions/' + id + '/fixtures?timeFrame=n1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

function getMatchesDayBefore(callback) {
  options.url = hostname +'/fixtures?timeFrame=p1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

function getMatches(callback) {
  options.url = hostname +'/fixtures?timeFrame=n1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

function serveMatches(collection, ids) {
  collection.find({}, function(err, document) {
    if(err) {
      console.log(err);
    } else {
      console.log(document);
    }
  });
};


module.exports.getMatchesByCompetition = getMatchesByCompetition;
module.exports.getMatchesDayBefore = getMatchesDayBefore;
module.exports.getMatches = getMatches;
module.exports.serveMatches = serveMatches;
