require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const { categoriesRouter } = require('./routers/categoriesRouter');
const loginRouter = require('./routers/loginRouter');
// const { postRouter } = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const errorHandler = require('./middlewares/errorHandler');

// const userValidation = require('./middlewares/userValidation');

const app = express();

app.use(bodyParser.json());

// app.use('/categories', categoriesRouter);

// app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
app.use(loginRouter);
app.use(userRouter);
app.use(errorHandler);