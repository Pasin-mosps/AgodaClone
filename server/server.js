const express = require('express')
const { readdirSync } = require(`fs`)
const morgan = require('morgan')
const cors = require(`cors`)
const bodyParser = require(`body-parser`)

const connectDB = require('./Config/db')


const router = express.Route();
const app = express();

connectDB();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit: '10mb'}))

readdirSync(`./Routes`).map((r) => app.use('/api', require(`./Routes/` +r)))

app.listen(5000,() => 
    console.log("Server run on port 5000")
)