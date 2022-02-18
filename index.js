const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(`${__dirname}/index.html`);
});

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log("programa rodando na porta 3000")
})