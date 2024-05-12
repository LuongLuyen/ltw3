const express  = require("express")
const app = express()
const path = require("path")
const cors = require('cors')
const PORT = process.env.PORT || 5000
const connection = require("./Config/configDB")
const routerApi = require("./Router/routeApi")
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors()) 
connection.connectMongoDB()

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/api', routerApi)
app.get('/',(req,res)=>{
    res.send(
        "<h1> Server Luong Van Luyen B21DCCN504</h1>" 
    )
})
 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
