// Node.jsのHTTPモジュールをインポート
const http = require('http');
const fs = require('fs');

// サーバーを作成
const server = http.createServer((req, res) => {
    // サーバーがHTMLファイルを提供
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

// サーバーリスニング
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
