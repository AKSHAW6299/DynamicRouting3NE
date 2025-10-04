import express from 'express'
const router = express.Router()

// Routes with route file
// 1) Sending normal message and JSON data as response
router.get('/', (req, res) => {
    res.send('Birds home page...')
})
router.get('/about', (req, res) => {
    res.send('Birds about page...')
})



export default router