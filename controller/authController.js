

const jwt = require('jsonwebtoken');

let javi = {
    usuario: 'javi',
    contraseña: 'contraseña de javi+'
};

const getToken = (req, res) => {


    let token = jwt.sign(javi, process.env.PRIVATEKEY);

    
    res.send({
        'token':token});

    console.log("Token enviado");
}

const verifyToken = (req, res) => {

    console.log('recibido petición de verifiacion de token');
    const tokenReceived = req.header('auth-token');
    console.log(tokenReceived);
    let tokenDecoded    
  
        try{
            tokenDecoded = jwt.verify(tokenReceived, process.env.PRIVATEKEY);

        } catch(error){
            if(error!=undefined){
                //res.status(401).send('Error - Token Inválido');
                res.send(true);
            }

        }      
        console.log(tokenDecoded);
        res.send(true);
   
  
    
}





module.exports = {
    getToken,
    verifyToken

}





// Verificar la firma del token.
//let tokendecoded = jwt.verify(token, process.env.PRIVATEKEY);

//console.log(tokendecoded);



