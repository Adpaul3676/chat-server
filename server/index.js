const express = require ('express');
const app = express ();
app.use (express.json());
// app.use(express.static(__dirname + '/../public/build'))

const messagesController = require ('./controllers/messages_controller');
const messUrl = '/api/messages'
app.post(messUrl, messagesController.create)
app.get(messUrl, messagesController.read)
app.put(`${messUrl}:/id`, messagesController.update)
app.delete(`${messUrl}/:id`, messagesController.delete)

let port = 3600
app.listen ({port}, () => {console.log(`Chillin at ${port}`)});