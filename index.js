
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

mongoose.connect('mongodb://sbowl001:database1@ds139841.mlab.com:39841/backendproject')
.then(()=> {
    console.log('connected to mlab')
})
.catch((error)=> {
   console.log(error)
});
express()
  .get('/newpath', (req, res) => res.status(600).json([1 , 2, 3]))
  .get('/', (req, res) => res.json('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
