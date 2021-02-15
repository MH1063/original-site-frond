var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  var url = req.url; //リクエストからURLを取得
  var tmp = url.split('.'); //splitで . で区切られた配列にする 
  var ext = tmp[tmp.length - 1]; //tmp配列の最後の要素(外部ファイルの拡張子)を取得
  var path = '.' + url; //リクエストされたURLをサーバの相対パスへ変換する
  switch(ext){
    
  case '/': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('./toppage.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/sign': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('sign.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/login': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('login.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/toppage_afterlogin': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('toppage_afterlogin.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/user': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('user.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/user_edit': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('user_edit.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/user_other': //拡張子が/(index.html)だった場合はindex.htmlを返す
    fs.readFile('user_other.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=1':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
  
  case '/team?number=2':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=3':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
  
  case '/team?number=4':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=5':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
  
  case '/team?number=6':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=7':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
  
  case '/team?number=8':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=9':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=10':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=11':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=12':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=13':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=14':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=15':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=16':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=17':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=18':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=19':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=20':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=21':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=22':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=23':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=24':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=25':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=26':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=27':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=28':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=29':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case '/team?number=30':
    fs.readFile('team.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(data,'utf-8');
    });
    break;
    
  case 'js': //拡張子がjsならContent-Typeをtext/javascriptにする
    fs.readFile(path,function(err,data){
      res.writeHead(200,{"Content-Type":"text/javascript"});
      res.end(data,'utf-8');
    });
    break;
    
  case 'css': 
    fs.readFile(path,function(err,data){
      res.writeHead(200,{"Content-Type":"text/css"});
      res.end(data,'utf-8');
    });
    break;
    
  case 'jpg': //拡張子がjsならContent-Typeをtext/javascriptにする
    fs.readFile(path,function(err,data){
      res.writeHead(200,{"Content-Type":"image/jpeg"});
      res.end(data,'utf-8');
    });
    break;
    
  }
}).listen(process.env.PORT || 8080);
console.log('サーバーを起動しました。');


