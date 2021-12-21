const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) =>{

    const tokenReceived = req.header('auth-token');
    console.log(tokenReceived);
    let tokenDecoded

   

    
  
        try{
            tokenDecoded = jwt.verify(tokenReceived, process.env.PRIVATEKEY);

        } catch(error){
            if(error!=undefined){
                res.status(401).send('Error - Token Inválido');
            }

        }
        
        
   
  
    console.log(tokenDecoded);




    //const bodyPrueba = req.body.hola;
    //console.log(req.body.email);
    
    
    next();
}

module.exports = authGuard;