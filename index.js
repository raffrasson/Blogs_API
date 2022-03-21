require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const { categoriesRouter, loginRouter, postRouter, userRouter } = require('./routers');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/categories', categoriesRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);
app.use('user', userRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
