const PORT = 3001;
const routes = require('./routes/restaurantRoutes')
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use("/api", routes);

app.use(express.static('public'));


app.listen(PORT, ()=>{
  console.log(`Servidor aberto na porta ${PORT}`);
})
