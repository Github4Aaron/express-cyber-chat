This Node.js cyber-chat app uses Express.js and Socket.IO to build websockets.  If a browser does not support websockets, it will fall back to long polling, in which the client makes a request of the server to see if data has changed, and leaving this request open for a long period of time. 

To start:
1. Clone the repo
2. npm install
3. node sio-server
4. Navigate to localhost 3000.
