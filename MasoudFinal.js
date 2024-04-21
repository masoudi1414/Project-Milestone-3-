// MasoudFinal.js (Node.js server)

const http = require('http');

const PORT = process.env.PORT || 3000;

const quotes = [
    {
        text: "Self-respect is the root of discipline: The sense of dignity grows with the ability to say no to oneself.",
        author: "Abraham Joshua Heschel",
        image: "https://images.pexels.com/photos/15196078/pexels-photo-15196078/free-photo-of-silhouette-of-a-man-with-a-hat-looking-at-the-sunset-over-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
        image: "https://images.pexels.com/photos/584179/pexels-photo-584179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        text: "Stay committed to your decisions, but stay flexible in your approach.",
        author: "Tom Robbins",
        image: "https://images.pexels.com/photos/9798426/pexels-photo-9798426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Quotes</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #000;
                        color: #fff;
                    }
                    .container {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        min-height: 100vh;
                    }
                    .quote {
                        text-align: center;
                        width: 30%;
                        padding: 20px;
                        background-color: transparent;
                        color: #fff;
                    }
                    .quote img {
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                        margin-bottom: 10px;
                        display: block;
                    }
                    .quote p {
                        margin: 0;
                        font-size: 18px;
                        font-style: italic;
                        color: #fff;
                    }
                    .quote span {
                        font-weight: bold;
                        color: #fff;
                    }
                </style>
            </head>
            <body>
                <div class="container">
        `);

        quotes.forEach(quote => {
            res.write(`
                <div class="quote">
                    <img src="${quote.image}" alt="Image">
                    <p>"${quote.text}"</p>
                    <p><span>${quote.author}</span></p>
                </div>
            `);
        });

        res.write(`
                </div>
            </body>
            </html>
        `);

        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});