console.log('hello world!')
// import express from 'express'
import * as express from 'express'

require('dotenv').config()
// import { PORT } from './utils/config'
const app = express()
// const PORT = 3000

const PORT = process.env.PORT || 3002

/**
 * REST APi
 */
app.get('/api/projects/', (req, res, next) => {
  res.json({ message: 'Get All Projects' })
})

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
// app.listen(3000)
