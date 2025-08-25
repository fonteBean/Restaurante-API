const PORT = 3001;
const routes = require('./routes/restaurantRoutes')
const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(routes);


app.listen(PORT, ()=>{
  console.log(`Servidor aberto na porta ${PORT}`);
})
