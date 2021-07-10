const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
env.config();

const app = express();
//mongodb+srv://root:<password>@cluster0.inn6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.inn6h.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then( () => {
    console.log(`Database connected`);
});

app.use(bodyParser());
app.use('/api', userRoutes);
app.use('/api', adminRoutes);

/*app.get('/',(req, res, next) => {
   res.status(200).json({
       message:'Hello'
    });
});
app.post('/data',(req, res, next) => {
    res.status(200).json({
        message:req.body
    });
 });*/

 app.listen(process.env.PORT, () =>{
    console.log(`server connected ${process.env.PORT}`);
});
