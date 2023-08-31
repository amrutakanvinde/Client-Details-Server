const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const clients = [
  { id: 1, name: 'Client 1', email: 'client1@example.com' },
  { id: 2, name: 'Client 2', email: 'client2@example.com' },
  // Add more client data
];

app.get('/test', (req,res)=> {
    res.send('Hello fromn the other side')
})

app.get('/api/clients', (req, res) => {
  res.json(clients);
});

app.get('/api/clients/:id', (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find(client => client.id === clientId);
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ message: 'Client not found' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
