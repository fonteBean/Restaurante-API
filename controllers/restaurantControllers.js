const restaurantRepository = require("../repositories/restaurantRepository")
const errorResponse = require('../utils/errorHandler')
async function read(req,res) {
    try{
      const id = req.param.id;
      const plate = await restaurantRepository.read(id);
      if(!plate){
        return errorResponse(res,404,`Not Found`);
      }
      return res.status(200).json(plate);
    }catch(error){
      return errorResponse(res,500,error);
    }
}

async function readAll(res,res){
  try {
    const plates = await restaurantRepository.readAll();
    if(!plates){
      return errorResponse(res,404,"Not  Found");
    }
    return res.status(200).json(plates);
  } catch (error) {
    return errorResponse(res,500,error);
  }
}


async function create(req,res) {
  try {
    const {nome,descricao,preco,ingredientes} = req.body;
    if(!nome || !descricao || !preco || !ingredientes){
        return errorResponse(res,400,"Parâmetros incompletos");
    }
    const plate = {
      nome : nome,
      descricao : descricao,
      preco : preco,
      ingredientes : ingredientes
    }
    const query =  await restaurantRepository.create(plate);
    if(!query){
      return errorResponse(res,400,"Error ao criar prato");
    }
    return res.status(201).json(plate);
  } catch (error) {
   return errorResponse(res,500,error);
  }  

}


async function del(req,res) {
  try{
    const id = req.id;
    if(!id){
      return errorResponse(res,404,"Id não encontrado");
    }
    const query = await restaurantRepository.del(id);
    if(!query){
      return errorResponse(res,400,"Erro ao deletar item");
    }
    return res.status(204);
  }catch(error){
    return errorResponse(res,500,error);
  }
}

module.exports = {
  read,
  readAll,
  create,
  del
}