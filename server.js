import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {

    let filePath = "./public/index.html";

    if (request.url === "/provider") { filePath = "./public/provider.html"; }
    if (request.url === "/client") { filePath = "./public/client.html"; }

    // reads the file with file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500);
            response.end("Server error");
            return;
        }

        // no error - serve up the page
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});