 console.log('Starting app.js');

 const fs = require('fs');
 const os = require('os');
 const notes = require('./notes.js');
 var res = notes.addNote();
 console.log('Result:',notes.add(9,-2));
 /*var user = os.userInfo();

 fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}`);
 */