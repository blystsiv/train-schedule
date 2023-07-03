import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5050

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`)
})
