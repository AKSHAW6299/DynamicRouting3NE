import express from 'express'
import path from 'path'
const router = express.Router()


// Routes with route file
// 1) Sending normal message and JSON data as response
router.get('/', (req, res) => {
    res.send('Got a GET request.')
})
router.post('/items', (req, res) => {
    // res.send('Got a POST request.')
    res.json({x:10, y:20, z:30})
})
router.put('/items/:id', (req, res) => {
    res.send('Got a PUT request.')
})
router.delete('/items/:id', (req, res) => {
    res.send('Got a DELETE request.')
})


// 2) To send a dummy file as a response
const absolutePath = path.resolve('dummy.html');
// console.log(absolutePath);
router.get('/file', (req, res) => {
    res.sendFile(absolutePath) // To send absolute path
})


export default router

