const express = required('express');
const path = required('path');
const app = express();

console.log('fdsfdfdsdf');

app.use(express.static(_dirname + '/dist/angular-to-heroku-app'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-to-heroku-app/index.html'));
});

app.listen(process.env.PORT || 8080);
