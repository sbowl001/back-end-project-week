
const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/newpath', (req, res) => res.status(600).json([1 , 2, 3]))
  .get('/', (req, res) => res.json('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
