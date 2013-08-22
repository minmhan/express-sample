var express = require('express');
var app = express();

var hbs = require('hbs');
var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.use(express.static('public'));

app.get('/', function(req,res){
	// response.sendfile('./views/index.html');
	res.render('index', {title:"My Blog", entries:blogEngine.getBlogEntries()});
	});

app.get('/about', function(req,res){
	//res.sendfile('./views/about.html');
	res.render('about');
	});
app.get('/article/:id', function(req,res){
	//res.sendfile('./views/article.html');
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article', {title:entry.title, blog:entry});
	});

app.listen(3000);