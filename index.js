// Require Packages.
const GD = require('gd.js');
const fs = require('fs');
 
// Makes things shorter.
const gd = new GD();
 
// Where the fun starts!
gd.users.login({ username: 'YourUsername', password: 'YourPassword' })
  .then(YourUsername => setInterval(() => YourUsername.postAccountComment("You are Normal!"), 1500 ));
  console.log('You are Normal!');
