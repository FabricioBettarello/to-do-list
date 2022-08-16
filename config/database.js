//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('')  // coloque sua database
}

//exportar as infomações para acesso externo
module.exports = conn 