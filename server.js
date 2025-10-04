import express from 'express'
import itemRouter from './routes/item.js'   // import the item router file.
import birdsRoute from './routes/birds.js'  // import the birds router file.
const app = express()
const port = 3000


// load the router file into application
app.use('/apis', itemRouter)     // http://localhost:3000/api/
app.use('/birds', birdsRoute)   // http://localhost:3000/birds/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
