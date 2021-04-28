let messagesArr = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    let {text, time} = req.body;
    messagesArr.push({id, text, time});
    id++;
    res.status(200).send(messagesArr)
  },

  read: (req, res) => {
    res.status(200).send(messagesArr)
  },

  update: (req, res) => {
    let {text} = req.body;
    let {id} = req.params;
    let messageIndex = messagesArr.findIndex(message => message.id === +id);
    let message = messagesArr[messageIndex]

    messagesArr[messageIndex] = {
      id: message.id,
      text: text,
      time: message.time
    }

    res.status(200).send(messagesArr)
  },

  delete: (req, res) => {
    let {id} = req.params
    let newArr = messagesArr.filter(message => message.id !== +id)
    res.status(200).send(newArr)
  },
}