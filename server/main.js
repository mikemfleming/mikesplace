var express = require('express');
var browserify = require('browserify-middleware');
var app = express();
var path = require('path');

var assetFolder = path.join(__dirname + '/../client')
app.use(express.static(assetFolder));

app.get('/', (req, res) => {
	res.sendFile(assetFolder + '/index.html')
})

app.get('/app-bundle.js', 
	browserify('./client/main.js', {
		transform: [[require('babelify'), { presets: ['es2015', 'react']}]]
	})
);

var port = process.env.PORT || 8080
app.listen(port);
console.log('listening on localhost:' + port)