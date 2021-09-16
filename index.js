const express = require('express');
const app = express();
const PORT = 4000;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it lives on https://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'medium'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;


# rest
