const express = require('express')
const cors = require('cors')
const plantsRouter = require('./routes/plantsRoutes.js')
const indexRouter = require('./routes/indexRoutes.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.set('view engine','ejs')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.use('/api',plantsRouter)
app.use('/',indexRouter)

app.listen(3000,()=>{
    console.log('Server Open in Port 3000')
})