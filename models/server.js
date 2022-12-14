const express = require('express');
const cors = require('cors');
class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.huertosPath = '/api/huertos';
        this.middlewares();//middlewares
        this.routes();//rutas
       
    }
    middlewares(){
      this.app.use(cors());
      this.app.use( express.json() );  
      this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.huertosPath,require('../routes/huertos'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;