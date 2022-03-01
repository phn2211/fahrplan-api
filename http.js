var http = require('http');
var url = require('url');
var dt = require('./modules/datetime')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write('Hello World!');
  res.write('<br/>');
  res.write("The date and time are currently: " + dt.myDateTime('dd:mm:YY'));
  res.write('<br/>');
  res.end(txt);
}).listen(8090);