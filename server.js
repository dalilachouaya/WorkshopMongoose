const express = require('express')
const app = express()
const connectdb = require('./config/connectdb')

connectdb()
app.use(express.json())
app.use('/api/contact', require('./routes/contacts'))


const PORT = 5000
app.listen(PORT,(err)=>{
    if (err){throw(err)}
    else { console.log( `Server is running at ${PORT}`)}
})
