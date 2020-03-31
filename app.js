const exp = require('express');
const app = exp();

app.get('/', (req, res)=>{
    res.send({hi: 'there', name: "Rosy"});
});

const PORT = process.env.PORT || 8000
app.listen(PORT);
