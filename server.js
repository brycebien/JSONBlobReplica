const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){
    //const index = fs.readFileSync('index.html', 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./index.html'));
    $('.button-write')[0].onclick = function(){
        console.log(words);
    }
    res.end();
}).listen(8080);

function test(words){
    console.log(words);
}
