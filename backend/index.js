//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const PropertyRouter = require('./routers/propertyrouter');
const cors = require('cors')

//creating an express app

const app = express();

const port = 5000;

app.use(cors({
   origin: ['http://localhost:3000']
}))

app.use(express.json())
app.use('/user', UserRouter);
app.use('/property', PropertyRouter);

//router or endpoint
app.get('/', (req, res) => {
   res.send('reponse from express');
});


//starting the server
app.listen(port, () => { console.log('server started'); })