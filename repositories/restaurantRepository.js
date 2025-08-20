const db = require('../db/db');

async function create(plate) {
  try{
    const query = await db('db_restaurante').insert(plate);
    if(!query){
      return false;
    }
    return true;
}catch(err){
    console.log(err);
    return false;
  }
}

async function read(id) {
  try{
    const plate = await db('db_restaurante').where({id:id}).first();
    if(!plate){
      return false;
    }
    return plate;
  }catch(err){
    console.log(err);
    return false;
  }
}

async function readAll(){
  try{
    const plates = await db('db_restaurante').select('*');
    if(!plates){
      return false;
    }
    return plates;
  }catch(err){
    console.log(err);
    return false;
  }
}


async function del(id){
  try{
    const query = await db('db_restaurante').where({id:id});
    if(!query){
      return false;
    }
    return true;
  }catch(err){
    console.log(err);
    return false;
  }
}


module.exports = {
  create,
  read,
  readAll,
  del
}