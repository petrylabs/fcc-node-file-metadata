const express = require('express');
const app = express();

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})