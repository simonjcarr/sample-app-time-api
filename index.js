const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/time', (req, res) => {
  res.json({time: new Date()})
})

app.listen(80)